# Managed boundaries only: no Windows mouse wheel, timer, focus or routing API.
$ErrorActionPreference='Stop'
$checks=@'
public static class WheelChecks {
 static void Check(bool value,string code){if(!value)throw new Exception(code);}
 public static void Run(){
  Type type=typeof(MouseMotionEngine).Assembly.GetType("MouseWheelEngine");Check(type!=null,"Missing wheel engine");
  long now=0;bool valid=true,injectOk=true;List<int> sent=new List<int>();
  object wheel=Activator.CreateInstance(type,new object[]{(Func<bool>)delegate{return valid;},(Func<int,bool>)delegate(int delta){sent.Add(delta);return injectOk;},(Func<long>)delegate{return now;}});
  var start=type.GetMethod("Start");var tick=type.GetMethod("Tick");var stop=type.GetMethod("Stop");var active=type.GetProperty("Active");
  Func<int,bool,string> run=delegate(int direction,bool continuous){return (string)start.Invoke(wheel,new object[]{direction,continuous});};
  Check(run(-1,false)=="ok"&&sent.Count==1&&sent[0]==-120,"Bounded down notch");Check(!(bool)active.GetValue(wheel,null),"Step is not continuous");
  Check(run(1,false)=="ok"&&sent[1]==120,"Bounded up notch");sent.Clear();
  Check(run(-1,true)=="ok"&&(bool)active.GetValue(wheel,null),"Slow start");Check(sent.Count==1&&sent[0]==-15,"Small slow delta");
  run(-1,true);tick.Invoke(wheel,null);Check(sent.Count==1,"Repeated command and early tick do not multiply rate");
  now=250;tick.Invoke(wheel,null);Check(sent.Count==2,"250ms cadence");now=1250;tick.Invoke(wheel,null);Check(sent.Count==3,"No catch-up burst");
  int atChange=sent.Count;run(1,true);Check(sent.Count==atChange,"Direction changes preserve bounded cadence");now+=250;tick.Invoke(wheel,null);Check(sent[sent.Count-1]==15,"Direction replacement");
  stop.Invoke(wheel,null);int before=sent.Count;now+=1000;tick.Invoke(wheel,null);Check(sent.Count==before&&!(bool)active.GetValue(wheel,null),"Stop never flushes queued wheel input");
  run(-1,true);before=sent.Count;now+=30000;Check((string)tick.Invoke(wheel,null)=="limit"&&sent.Count==before&&!(bool)active.GetValue(wheel,null),"Maximum runtime");
  run(-1,true);before=sent.Count;valid=false;now+=250;Check((string)tick.Invoke(wheel,null)=="target"&&sent.Count==before&&!(bool)active.GetValue(wheel,null),"Target loss stops before injection");
  Type position=typeof(MouseMotionEngine).Assembly.GetType("MouseWheelPosition"),binding=typeof(MouseMotionEngine).Assembly.GetType("MouseWheelBinding");Check(position!=null&&binding!=null,"Missing pointer routing binding");
  object a=Activator.CreateInstance(position),b=Activator.CreateInstance(position);
  foreach(object p in new object[]{a,b}){position.GetField("Window").SetValue(p,101L);position.GetField("Owner").SetValue(p,100L);position.GetField("Foreground").SetValue(p,200L);position.GetField("Pid").SetValue(p,22);position.GetField("Routing").SetValue(p,2u);position.GetField("Available").SetValue(p,true);position.GetField("Point").SetValue(p,new MousePoint(10,20));}
  var check=binding.GetMethod("Check");var same=binding.GetMethod("Same");
  Check((string)check.Invoke(null,new object[]{a,999,888})=="ok","Explicit Windows pointer routing permits inactive target");
  position.GetField("Routing").SetValue(b,0u);Check(!(bool)same.Invoke(null,new object[]{a,b,999,888}),"Never scroll focused fallback when pointer routing disabled");position.GetField("Routing").SetValue(b,2u);
  position.GetField("Point").SetValue(b,new MousePoint(11,20));Check(!(bool)same.Invoke(null,new object[]{a,b,999,888}),"Physical cursor change invalidates stream");position.GetField("Point").SetValue(b,new MousePoint(10,20));
  position.GetField("Foreground").SetValue(b,300L);Check(!(bool)same.Invoke(null,new object[]{a,b,999,888}),"Foreground change invalidates stream");position.GetField("Foreground").SetValue(b,200L);
  position.GetField("InMenu").SetValue(b,true);Check(!(bool)same.Invoke(null,new object[]{a,b,999,888}),"Native menu stops wheel");
  valid=true;injectOk=false;Check(run(-1,true)=="error"&&!(bool)active.GetValue(wheel,null),"Injection failure cleanup");
 }
}
'@
$source=[IO.File]::ReadAllText((Join-Path (Split-Path $PSScriptRoot -Parent) 'scripts/physical-mouse.cs'))
Add-Type -CompilerOptions '/langversion:5' -TypeDefinition ("using System.Collections.Generic;`n"+$source+"`n"+$checks)
[WheelChecks]::Run()
'PASS: finite/slow wheel deltas, cadence, replacement, stop, runtime and cleanup (managed simulation; not Windows)'
