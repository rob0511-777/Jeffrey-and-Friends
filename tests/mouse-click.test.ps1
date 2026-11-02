# Managed injected boundaries only; never call SendInput or user32 in this test.
$ErrorActionPreference='Stop'
$checks=@'
public static class ClickChecks {
 static void Check(bool value,string code){if(!value)throw new Exception(code);}
 public static void Run(){
  Type clicks=typeof(MouseMotionEngine).Assembly.GetType("MouseClickEngine");Check(clicks!=null,"Missing click engine");
  System.Reflection.MethodInfo execute=clicks.GetMethod("Execute");
  List<uint[]> sent=new List<uint[]>();Func<uint[],uint> inject=delegate(uint[] flags){sent.Add(flags);return (uint)flags.Length;};
  Func<bool> free=delegate{return false;};
  string result=(string)execute.Invoke(null,new object[]{"left",free,inject});
  Check(result=="ok"&&sent.Count>=2&&sent[0][0]==2&&sent[0][1]==4,"Single left down/up pair");
  Check(sent[sent.Count-1][0]==4&&sent[sent.Count-1][1]==16,"Both buttons released");
  sent.Clear();result=(string)execute.Invoke(null,new object[]{"right",free,inject});Check(result=="ok"&&sent[0][0]==8&&sent[0][1]==16,"Single right click");
  sent.Clear();result=(string)execute.Invoke(null,new object[]{"left",(Func<bool>)delegate{return true;},inject});Check(result=="busy"&&sent.Count==0,"Physical held button must block click");
  sent.Clear();Func<uint[],uint> partial=delegate(uint[] flags){sent.Add(flags);return flags[0]==2?1u:2u;};
  result=(string)execute.Invoke(null,new object[]{"left",free,partial});Check(result=="error"&&sent[sent.Count-1][0]==4,"Partial SendInput released");
  sent.Clear();Func<uint[],uint> fail=delegate(uint[] flags){sent.Add(flags);if(flags[0]==2)throw new Exception("Private OS error");return 2;};
  result=(string)execute.Invoke(null,new object[]{"left",free,fail});Check(result=="error"&&sent[sent.Count-1][0]==4,"Exception released");
  result=(string)execute.Invoke(null,new object[]{"left",free,(Func<uint[],uint>)delegate(uint[] flags){return 0;}});Check(result=="release-error","Never claim successful release when OS rejects it");
  Type target=typeof(MouseMotionEngine).Assembly.GetType("MouseClickTarget");Check(target!=null,"Missing transparent-overlay target selection");
  var windowType=typeof(MouseMotionEngine).Assembly.GetType("MouseClickWindow");
  Array windows=Array.CreateInstance(windowType,3);for(int n=0;n<3;n++){object w=Activator.CreateInstance(windowType);windowType.GetField("Window").SetValue(w,(long)(100+n));windowType.GetField("Pid").SetValue(w,n==0?999:22);windowType.GetField("Visible").SetValue(w,true);windowType.GetField("Bounds").SetValue(w,new MouseBounds{X=-100,Y=0,Width=200,Height=100});windowType.GetField("Transparent").SetValue(w,n==1);windows.SetValue(w,n);}
  object chosen=target.GetMethod("Select").Invoke(null,new object[]{windows,new MousePoint(-10,20),999,888});Check(chosen!=null&&(long)windowType.GetField("Window").GetValue(chosen)==102,"Own and transparent windows must not steal click ownership");
  MousePoint point=new MousePoint(0,0);MouseMotionEngine engine=new MouseMotionEngine(delegate{return point;},delegate(MousePoint p){point=p;},delegate(MouseBounds b,MousePoint p){return true;});
  System.Reflection.MethodInfo idle=typeof(MouseMotionEngine).GetMethod("WhenIdle");Check(idle!=null,"Missing idle click gate");bool ran=false;Action click=delegate{ran=true;};
  engine.Move(1,new MousePoint(500,500),200,new MouseBounds{X=0,Y=0,Width=1000,Height=1000});
  Check(!(bool)idle.Invoke(engine,new object[]{click})&&!ran,"Moving pointer must reject click");engine.Stop();
  Check((bool)idle.Invoke(engine,new object[]{click})&&ran,"Confirmed native stop permits click");
  var versionProperty=typeof(MouseMotionEngine).GetProperty("Version");var commit=typeof(MouseMotionEngine).GetMethod("WhenIdleIfCurrent");Check(versionProperty!=null&&commit!=null,"Missing prepared click cancellation gate");
  long version=(long)versionProperty.GetValue(engine,null);engine.Stop();ran=false;Check(!(bool)commit.Invoke(engine,new object[]{version,click})&&!ran,"Stopped prepared click must never inject");

 }
}
'@
$source=[IO.File]::ReadAllText((Join-Path (Split-Path $PSScriptRoot -Parent) 'scripts/physical-mouse.cs'))
Add-Type -CompilerOptions '/langversion:5' -TypeDefinition ("using System.Collections.Generic;`n"+$source+"`n"+$checks)
[ClickChecks]::Run()
'PASS: single clicks, busy motion, held buttons, partial injection and exception cleanup (managed simulation; not Windows input test)'
