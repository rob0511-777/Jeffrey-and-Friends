# UIA contract simulation on Linux; no actual Windows menus, hooks or processes.
$ErrorActionPreference='Stop'
$fake=@'
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows.Automation;
namespace System.Windows { public struct Rect {public double X,Y,Width,Height;public Rect(double x,double y,double w,double h){X=x;Y=y;Width=w;Height=h;}} }
namespace System.Windows.Automation {
 public enum TreeScope {Children=2}
 public class Condition {public static Condition TrueCondition=new Condition();}
 public class ControlType {public static ControlType Menu=new ControlType(),MenuItem=new ControlType(),Window=new ControlType(),Pane=new ControlType(),Separator=new ControlType(),Button=new ControlType();}
 public class AutomationPattern {}
 public enum ExpandCollapseState {Collapsed,Expanded,PartiallyExpanded,LeafNode}
 public class InvokePattern {public static AutomationPattern Pattern=new AutomationPattern();public Action Run;public void Invoke(){Run();}}
 public class ExpandCollapsePattern {public static AutomationPattern Pattern=new AutomationPattern();public Action Run;public Info Current=new Info();public class Info{public ExpandCollapseState ExpandCollapseState;}public void Expand(){Run();}public void Collapse(){}}
 public struct AutomationElementInformation {public int ProcessId,NativeWindowHandle;public bool IsOffscreen,IsEnabled;public ControlType ControlType;public string Name;public System.Windows.Rect BoundingRectangle;}
 public class AutomationElementCollection:List<AutomationElement>{}
 public class AutomationElement {
  public static AutomationElement RootElement;public AutomationElementInformation Info;public bool Stale;public int Id;public object Pattern;
  public List<AutomationElement> Children=new List<AutomationElement>();
  public AutomationElementInformation Current{get{if(Stale)throw new InvalidOperationException("PRIVATE");return Info;}}
  public int[] GetRuntimeId(){if(Stale)throw new InvalidOperationException();return new int[]{Id};}
  public AutomationElementCollection FindAll(TreeScope scope,Condition condition){var a=new AutomationElementCollection();a.AddRange(Children);return a;}
  public bool TryGetCurrentPattern(AutomationPattern pattern,out object value){value=Pattern;if(pattern==InvokePattern.Pattern)return value is InvokePattern;if(pattern==ExpandCollapsePattern.Pattern)return value is ExpandCollapsePattern;return false;}
 }
}
'@
$checks=@'
public class FakeMenuWindows:IMenuWindows {
 public long epoch=1;public bool active=true;public Action close;
 public long Epoch{get{return epoch;}}public bool Active(long window,int pid){return active&&window==100&&pid==22;}
 public bool Popup(long window,long owner,int pid,MenuBounds bounds,int x,int y){return pid==22&&owner==100;}
 public bool Close(long owner,long popup){if(close!=null)close();return true;}
}
public static class ContextChecks {
 static void Check(bool v,string code){if(!v)throw new Exception(code);}
 static object Call(object target,string name,params object[] args){return target.GetType().GetMethod(name).Invoke(target,args);}
 static object Field(object value,string name){return value.GetType().GetField(name).GetValue(value);}
 static System.Windows.Automation.AutomationElement E(int id,System.Windows.Automation.ControlType type,string name){return new System.Windows.Automation.AutomationElement{Id=id,Info=new System.Windows.Automation.AutomationElementInformation{ProcessId=22,NativeWindowHandle=200,ControlType=type,Name=name,IsEnabled=true,BoundingRectangle=new System.Windows.Rect(10,20,200,200)}};}
 public static void Run(){
  Type type=typeof(ContextChecks).Assembly.GetType("UiaContextMenus");Check(type!=null,"Missing local UIA menu backend");
  var root=E(1,System.Windows.Automation.ControlType.Pane,"");var menu=E(2,System.Windows.Automation.ControlType.Menu,"");var item=E(3,System.Windows.Automation.ControlType.MenuItem,"Kopieren");int invoked=0;
  item.Pattern=new System.Windows.Automation.InvokePattern{Run=delegate{invoked++;}};menu.Children.Add(item);root.Children.Add(menu);root.Children.Add(new System.Windows.Automation.AutomationElement{Stale=true});var noisy=E(20,System.Windows.Automation.ControlType.Window,"");for(int n=0;n<600;n++)noisy.Children.Add(E(100+n,System.Windows.Automation.ControlType.Pane,""));root.Children.Insert(0,noisy);System.Windows.Automation.AutomationElement.RootElement=root;
  var native=new FakeMenuWindows();object backend=Activator.CreateInstance(type,new object[]{native,999});
  object snapshot=Call(backend,"Open",22,"100",10,20);int token=(int)Field(snapshot,"token");
  var entries=(System.Collections.IList)Field(snapshot,"items");Check(entries.Count==1,"Only actual menu entries");int id=(int)Field(entries[0],"id");
  Call(backend,"Execute",token,id,"invoke");Check(invoked==1,"Invoke exact entry");
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");native.active=false;
  try{Call(backend,"Execute",token,1,"invoke");throw new Exception("Focus change permitted");}catch(System.Reflection.TargetInvocationException){}Check(invoked==1,"Focus change rejected");native.active=true;
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");native.epoch++;
  try{Call(backend,"Execute",token,1,"invoke");throw new Exception("Reopened identical menu permitted");}catch(System.Reflection.TargetInvocationException){}Check(invoked==1,"Menu generation rejected");
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");item.Info.IsEnabled=false;
  try{Call(backend,"Execute",token,1,"invoke");throw new Exception("Disabled entry permitted");}catch(System.Reflection.TargetInvocationException){}Check(invoked==1,"Disabled entry rejected");item.Info.IsEnabled=true;
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");item.Info.Name="Other";
  try{Call(backend,"Execute",token,1,"invoke");throw new Exception("Changed label permitted");}catch(System.Reflection.TargetInvocationException){}Check(invoked==1,"Changed entry rejected");item.Info.Name="Kopieren";
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");menu.Info.IsOffscreen=true;
  try{Call(backend,"Inspect",token);throw new Exception("Closed menu permitted");}catch(System.Reflection.TargetInvocationException){}menu.Info.IsOffscreen=false;
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");menu.Info.BoundingRectangle=new System.Windows.Rect(500,500,200,200);
  try{Call(backend,"Inspect",token);throw new Exception("Moved menu permitted");}catch(System.Reflection.TargetInvocationException){}menu.Info.BoundingRectangle=new System.Windows.Rect(10,20,200,200);
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");item.Info.BoundingRectangle=new System.Windows.Rect(10,20,0,0);
  try{Call(backend,"Execute",token,1,"invoke");throw new Exception("Invisible zero-area item permitted");}catch(System.Reflection.TargetInvocationException){}Check(invoked==1,"Invisible item rejected");item.Info.BoundingRectangle=new System.Windows.Rect(10,20,200,200);
  var icon=E(700,System.Windows.Automation.ControlType.Button,"Einfügen");icon.Pattern=new System.Windows.Automation.InvokePattern{Run=delegate{invoked++;}};menu.Children.Add(icon);
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");Check(((System.Collections.IList)Field(snapshot,"items")).Count==2,"Windows 11 command-bar button missing");Call(backend,"Execute",token,2,"invoke");Check(invoked==2,"Native command-bar button invoked");menu.Children.Remove(icon);
  var child=E(4,System.Windows.Automation.ControlType.Menu,"");child.Children.Add(E(5,System.Windows.Automation.ControlType.MenuItem,"Ordner"));
  var sub=E(6,System.Windows.Automation.ControlType.MenuItem,"Senden an");sub.Pattern=new System.Windows.Automation.ExpandCollapsePattern{Run=delegate{root.Children.Add(child);native.epoch++;}};menu.Children.Add(sub);
  snapshot=Call(backend,"Open",22,"100",10,20);token=(int)Field(snapshot,"token");var expanded=Call(backend,"Execute",token,2,"expand");Check((int)Field(expanded,"token")!=token,"New submenu token");
  var next=(System.Collections.IList)Field(expanded,"items");Check((string)Field(next[0],"name")=="Ordner","Fresh submenu entries");
 }
}
'@
$path=Join-Path (Split-Path $PSScriptRoot -Parent) 'scripts/context-menu.cs'
if(Test-Path $path){$source=[IO.File]::ReadAllText($path)}else{$source='public class MenuBounds {} public interface IMenuWindows { long Epoch{get;} bool Active(long w,int p);bool Popup(long w,long o,int p,MenuBounds b,int x,int y);bool Close(long o,long p); }'}
$source=$source -replace '(?m)^using [^;]+;\r?\n',''
Add-Type -CompilerOptions '/langversion:5' -TypeDefinition ($fake+"`n"+$source+"`n"+$checks)
[ContextChecks]::Run()
'PASS: real menu backend with fake UIA/native boundaries: binding, focus, epoch, stale/disabled/changed entries and submenu (not Windows verification)'
