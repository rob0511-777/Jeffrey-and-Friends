using System;
using System.Collections.Generic;
using System.Globalization;
using System.Runtime.InteropServices;
using System.Text;
using System.Threading;
using System.Windows.Automation;

// UIA only: no text selection, clipboard, coordinate clicking or keyboard fallback.
public sealed class MenuFault:Exception {public readonly string Code;public MenuFault(string code):base("menu/"+code){Code=code;}}
public sealed class MenuBounds {public double x,y,width,height;}
public sealed class MenuEntry {public int id;public string name;public bool enabled,visible,supported,submenu;}
public sealed class MenuSnapshot {public int token,pid;public string window;public MenuBounds bounds;public List<MenuEntry> items;}
public interface IMenuWindows {
 long Epoch{get;}bool Active(long owner,int pid);bool Popup(long popup,long owner,int pid,MenuBounds bounds,int x,int y);bool Close(long owner,long popup);
}
public sealed class NativeMenuWindows:IMenuWindows,IDisposable {
 [StructLayout(LayoutKind.Sequential)]struct Point{public int X,Y;}
 [StructLayout(LayoutKind.Sequential)]struct Message{public IntPtr Window;public uint Id;public UIntPtr WParam;public IntPtr LParam;public uint Time;public Point Point;public uint Private;}
 delegate void EventProc(IntPtr hook,uint code,IntPtr window,int obj,int child,uint thread,uint time);
 [DllImport("user32.dll")]static extern IntPtr SetThreadDpiAwarenessContext(IntPtr context);
 [DllImport("user32.dll")]static extern IntPtr GetForegroundWindow();
 [DllImport("user32.dll")]static extern IntPtr GetAncestor(IntPtr window,uint flags);
 [DllImport("user32.dll")]static extern IntPtr GetWindow(IntPtr window,uint command);
 [DllImport("user32.dll")]static extern bool IsWindow(IntPtr window);
 [DllImport("user32.dll")]static extern uint GetWindowThreadProcessId(IntPtr window,out uint pid);
 [DllImport("user32.dll",CharSet=CharSet.Unicode)]static extern int GetClassName(IntPtr window,StringBuilder name,int length);
 [DllImport("user32.dll")]static extern IntPtr SetWinEventHook(uint min,uint max,IntPtr module,EventProc proc,uint pid,uint thread,uint flags);
 [DllImport("user32.dll")]static extern bool UnhookWinEvent(IntPtr hook);
 [DllImport("user32.dll")]static extern int GetMessage(out Message message,IntPtr window,uint min,uint max);
 [DllImport("user32.dll")]static extern bool TranslateMessage(ref Message message);
 [DllImport("user32.dll")]static extern IntPtr DispatchMessage(ref Message message);
 [DllImport("user32.dll")]static extern bool PostThreadMessage(uint thread,uint message,UIntPtr w,IntPtr l);
 [DllImport("kernel32.dll")]static extern uint GetCurrentThreadId();
 [DllImport("user32.dll")]static extern IntPtr SendMessageTimeout(IntPtr window,uint message,UIntPtr w,IntPtr l,uint flags,uint timeout,out UIntPtr result);
 readonly ManualResetEvent ready=new ManualResetEvent(false);readonly Thread thread;readonly EventProc callback;
 long epoch;uint threadId;bool hooked;
 public NativeMenuWindows(){
  SetThreadDpiAwarenessContext(new IntPtr(-4));
  callback=delegate(IntPtr h,uint code,IntPtr w,int o,int c,uint t,uint ms){if(code==3||code==6||code==7)Interlocked.Increment(ref epoch);};
  thread=new Thread(delegate(){threadId=GetCurrentThreadId();IntPtr hook=SetWinEventHook(3,7,IntPtr.Zero,callback,0,0,0);hooked=hook!=IntPtr.Zero;ready.Set();try{Message message;while(GetMessage(out message,IntPtr.Zero,0,0)>0){TranslateMessage(ref message);DispatchMessage(ref message);}}finally{if(hook!=IntPtr.Zero)UnhookWinEvent(hook);}});
  thread.IsBackground=true;thread.Start();if(!ready.WaitOne(1500)||!hooked)throw new MenuFault("unsupported");
 }
 public long Epoch{get{if(!hooked)throw new MenuFault("unsupported");return Interlocked.Read(ref epoch);}}
 static uint Pid(IntPtr window){uint pid;GetWindowThreadProcessId(window,out pid);return pid;}
 static bool Owned(IntPtr window,IntPtr owner){for(int i=0;i<8&&window!=IntPtr.Zero;i++){if(window==owner||GetAncestor(window,2)==owner)return true;window=GetWindow(window,4);}return false;}
 public bool Active(long owner,int pid){IntPtr target=new IntPtr(owner),active=GetForegroundWindow();return IsWindow(target)&&Pid(target)==(uint)pid&&Pid(active)==(uint)pid&&Owned(active,target);}
 public bool Popup(long popup,long owner,int pid,MenuBounds bounds,int x,int y){
  IntPtr window=new IntPtr(popup==0?owner:popup);if(!IsWindow(window)||Pid(window)!=(uint)pid)return false;
  StringBuilder type=new StringBuilder(128);GetClassName(window,type,type.Capacity);
  bool near=x>=bounds.x-40&&x<=bounds.x+bounds.width+40&&y>=bounds.y-40&&y<=bounds.y+bounds.height+40;
  return Owned(window,new IntPtr(owner))&&(type.ToString()=="#32768"||near);
 }
 public bool Close(long owner,long popup){UIntPtr result;bool ok=SendMessageTimeout(new IntPtr(owner),0x1F,UIntPtr.Zero,IntPtr.Zero,2,500,out result)!=IntPtr.Zero;if(popup!=0&&popup!=owner)ok=SendMessageTimeout(new IntPtr(popup),0x1F,UIntPtr.Zero,IntPtr.Zero,2,500,out result)!=IntPtr.Zero||ok;return ok;}
 public void Dispose(){if(threadId!=0)PostThreadMessage(threadId,0x12,UIntPtr.Zero,IntPtr.Zero);thread.Join(200);ready.Dispose();}
}
public sealed class UiaContextMenus {
 sealed class Node {public AutomationElement Element;public bool Nested;public int Depth;}
 sealed class Entry {public AutomationElement Element;public MenuEntry Data;public string Runtime;}
 readonly IMenuWindows native;readonly int ownPid;int pid,sequence,token,anchorX,anchorY;long owner,epoch;AutomationElement root;string rootRuntime,fingerprint;MenuSnapshot snapshot;
 public UiaContextMenus(IMenuWindows windows,int ownerPid){native=windows;ownPid=ownerPid;}
 static string Runtime(AutomationElement element){int[] ids=element.GetRuntimeId();if(ids==null||ids.Length==0)throw new MenuFault("unsupported");return string.Join(".",Array.ConvertAll(ids,delegate(int n){return n.ToString(CultureInfo.InvariantCulture);}));}
 static MenuBounds Bounds(AutomationElement element){var r=element.Current.BoundingRectangle;if(double.IsNaN(r.X)||double.IsNaN(r.Y)||double.IsInfinity(r.Width)||double.IsInfinity(r.Height)||r.Width<=0||r.Height<=0)throw new MenuFault("unsupported");return new MenuBounds{x=r.X,y=r.Y,width=r.Width,height=r.Height};}
 List<Node> Menus(){
  var nodes=new List<Node>();var queue=new Queue<Node>();var roots=AutomationElement.RootElement.FindAll(TreeScope.Children,Condition.TrueCondition);
  for(int i=0;i<roots.Count&&queue.Count<1024;i++)try{if(roots[i].Current.ProcessId==pid)queue.Enqueue(new Node{Element=roots[i]});}catch{}
  int budget=512;while(queue.Count>0&&budget-->0){var node=queue.Dequeue();if(node.Depth>8)continue;
   try{var info=node.Element.Current;if(info.ProcessId!=pid||info.IsOffscreen)continue;bool menu=info.ControlType==ControlType.Menu;if(menu)nodes.Add(node);
    var children=node.Element.FindAll(TreeScope.Children,Condition.TrueCondition);for(int i=0;i<children.Count&&queue.Count<1024;i++)queue.Enqueue(new Node{Element=children[i],Nested=node.Nested||menu,Depth=node.Depth+1});
   }catch{}
  }
  return nodes;
 }
 void Items(AutomationElement parent,List<Entry> result,int depth,ref int budget){
  if(depth>8||--budget<0)throw new MenuFault("unsupported");var children=parent.FindAll(TreeScope.Children,Condition.TrueCondition);
  for(int i=0;i<children.Count;i++){
   var child=children[i];var info=child.Current;if(info.ProcessId!=pid)throw new MenuFault("changed");if(info.IsOffscreen)continue;
   if(info.ControlType==ControlType.MenuItem||info.ControlType==ControlType.Button){
    var rectangle=info.BoundingRectangle;if(rectangle.Width<=0||rectangle.Height<=0||double.IsNaN(rectangle.X)||double.IsNaN(rectangle.Y))continue;
    if(result.Count>=100||string.IsNullOrWhiteSpace(info.Name)||info.Name.Length>160)throw new MenuFault("unsupported");
    object invoke=null,expand=null;bool hasInvoke=false,hasExpand=false;
    try{hasInvoke=child.TryGetCurrentPattern(InvokePattern.Pattern,out invoke)&&invoke is InvokePattern;hasExpand=child.TryGetCurrentPattern(ExpandCollapsePattern.Pattern,out expand)&&expand is ExpandCollapsePattern&&((ExpandCollapsePattern)expand).Current.ExpandCollapseState!=ExpandCollapseState.LeafNode;}catch{}
    result.Add(new Entry{Element=child,Runtime=Runtime(child),Data=new MenuEntry{id=result.Count+1,name=info.Name,enabled=info.IsEnabled,visible=true,submenu=hasExpand,supported=hasInvoke||hasExpand}});
   }else if(info.ControlType!=ControlType.Menu&&info.ControlType!=ControlType.Separator)Items(child,result,depth+1,ref budget);
  }
 }
 List<Entry> ReadItems(AutomationElement menu){var list=new List<Entry>();int budget=256;Items(menu,list,0,ref budget);if(list.Count==0)throw new MenuFault("unsupported");return list;}
 bool PopupAt(AutomationElement element,int x,int y){var info=element.Current;return native.Popup((long)(uint)info.NativeWindowHandle,owner,pid,Bounds(element),x,y);}
 static string Fingerprint(List<Entry> entries){var b=new StringBuilder();foreach(var e in entries)b.Append(e.Runtime).Append('\0').Append(e.Data.name).Append('\0').Append(e.Data.enabled).Append(e.Data.visible).Append(e.Data.submenu).Append(e.Data.supported).Append('\0');return b.ToString();}
 MenuSnapshot Bind(AutomationElement element){
  long current=native.Epoch;var entries=ReadItems(element);var bounds=Bounds(element);if(current!=native.Epoch||!native.Active(owner,pid))throw new MenuFault("changed");
  root=element;rootRuntime=Runtime(root);epoch=current;token=++sequence;fingerprint=Fingerprint(entries);var data=new List<MenuEntry>();foreach(var entry in entries)data.Add(entry.Data);
  snapshot=new MenuSnapshot{token=token,pid=pid,window=owner.ToString(CultureInfo.InvariantCulture),bounds=bounds,items=data};return snapshot;
 }
 bool Attached(){return root!=null&&native.Epoch==epoch&&native.Active(owner,pid)&&VisibleRoot();}
 bool VisibleRoot(){if(root==null)return false;var info=root.Current;if(info.ProcessId!=pid||info.IsOffscreen)return false;foreach(var node in Menus())if(Runtime(node.Element)==rootRuntime)return true;return false;}
 List<Entry> Validate(int expected){
  try{if(expected!=token||!Attached())throw new MenuFault("changed");var bounds=Bounds(root);if(bounds.x!=snapshot.bounds.x||bounds.y!=snapshot.bounds.y||bounds.width!=snapshot.bounds.width||bounds.height!=snapshot.bounds.height)throw new MenuFault("changed");var entries=ReadItems(root);if(Fingerprint(entries)!=fingerprint||native.Epoch!=epoch)throw new MenuFault("changed");return entries;}
  catch{root=null;snapshot=null;fingerprint=null;throw new MenuFault("changed");}
 }
 public MenuSnapshot Open(int targetPid,string window,int x,int y){
  root=null;snapshot=null;fingerprint=null;long target;if(targetPid<=0||targetPid==ownPid||!long.TryParse(window,out target)||target<=0)throw new MenuFault("unsupported");pid=targetPid;owner=target;anchorX=x;anchorY=y;
  for(int attempt=0;attempt<20;attempt++){
   if(!native.Active(owner,pid))throw new MenuFault("changed");long before=native.Epoch;var candidates=new List<AutomationElement>();
   foreach(var node in Menus())try{if(!node.Nested){var info=node.Element.Current;var bounds=Bounds(node.Element);if(native.Popup((long)(uint)info.NativeWindowHandle,owner,pid,bounds,x,y))candidates.Add(node.Element);}}catch{}
   if(candidates.Count==1&&before==native.Epoch)return Bind(candidates[0]);
   if(candidates.Count>1)throw new MenuFault("ambiguous");Thread.Sleep(50);
  }
  throw new MenuFault("unsupported");
 }
 public MenuSnapshot Inspect(int expected){Validate(expected);return snapshot;}
 public MenuSnapshot Execute(int expected,int itemId,string kind){
  var entries=Validate(expected);Entry chosen=null;foreach(var entry in entries)if(entry.Data.id==itemId)chosen=entry;
  if(chosen==null||!chosen.Data.visible)throw new MenuFault("not-found");if(!chosen.Data.enabled)throw new MenuFault("disabled");if(!chosen.Data.supported)throw new MenuFault("unsupported");
  if(!native.Active(owner,pid)||native.Epoch!=epoch)throw new MenuFault("changed");
  if(kind=="expand"){
   object pattern;if(!chosen.Element.TryGetCurrentPattern(ExpandCollapsePattern.Pattern,out pattern)||!(pattern is ExpandCollapsePattern))throw new MenuFault("unsupported");
   var prior=new HashSet<string>();foreach(var node in Menus())prior.Add(Runtime(node.Element));var from=Bounds(chosen.Element);Validate(expected);((ExpandCollapsePattern)pattern).Expand();
   for(int attempt=0;attempt<20;attempt++){
    if(!native.Active(owner,pid))throw new MenuFault("changed");var next=new List<AutomationElement>();foreach(var node in Menus())if(!prior.Contains(Runtime(node.Element))&&PopupAt(node.Element,(int)(from.x+from.width),(int)from.y))next.Add(node.Element);
    if(next.Count==1)return Bind(next[0]);if(next.Count>1)throw new MenuFault("ambiguous");Thread.Sleep(50);
   }
   throw new MenuFault("unsupported");
  }
  if(kind!="invoke"||chosen.Data.submenu)throw new MenuFault("unsupported");object invoke;
  if(!chosen.Element.TryGetCurrentPattern(InvokePattern.Pattern,out invoke)||!(invoke is InvokePattern))throw new MenuFault("unsupported");
  Validate(expected);((InvokePattern)invoke).Invoke();
  for(int attempt=0;attempt<20;attempt++){
   if(!native.Active(owner,pid))break;Thread.Sleep(30);var current=new List<AutomationElement>();
   foreach(var node in Menus())if(!node.Nested&&PopupAt(node.Element,anchorX,anchorY))current.Add(node.Element);
   if(current.Count==1){try{return Bind(current[0]);}catch{}}
   if(current.Count>1)break;
  }
  root=null;snapshot=null;fingerprint=null;return null;
 }
 public bool Close(int expected){
  if(expected!=token)return false;if(!Attached()){root=null;snapshot=null;fingerprint=null;return false;}long popup=(long)(uint)root.Current.NativeWindowHandle;
  bool sent=native.Close(owner,popup);for(int i=0;i<15;i++){if(!VisibleRoot()){root=null;snapshot=null;fingerprint=null;return sent;}Thread.Sleep(20);}root=null;snapshot=null;fingerprint=null;return false;
 }
}
