using System;
using System.Threading;
using System.Diagnostics;
using System.Globalization;
using System.Runtime.InteropServices;

public struct MousePoint { public int X,Y; public MousePoint(int x,int y){X=x;Y=y;} }
public struct MouseBounds { public int X,Y,Width,Height; public bool Contains(MousePoint p){return p.X>=X&&p.X<(long)X+Width&&p.Y>=Y&&p.Y<(long)Y+Height;} }
// The same motion engine is tested with managed boundaries; production delegates
// below only get/set physical cursor coordinates. It has no click/input API.
public sealed class MouseMotionEngine {
 readonly object gate=new object();long generation;bool moving;
 readonly Func<MousePoint> read;readonly Action<MousePoint> write;readonly Func<MouseBounds,MousePoint,bool> valid;
 public event Action<long> Started;public event Action<long> Done;public event Action Failed;
 public MouseMotionEngine(Func<MousePoint> read,Action<MousePoint> write,Func<MouseBounds,MousePoint,bool> valid){this.read=read;this.write=write;this.valid=valid;}
 public static MousePoint Interpolate(MousePoint from,MousePoint to,double fraction){
  double t=Math.Max(0,Math.Min(1,fraction));double smooth=t*t*(3-2*t);
  return new MousePoint((int)Math.Round(from.X+(to.X-from.X)*smooth),(int)Math.Round(from.Y+(to.Y-from.Y)*smooth));
 }
 public void Stop(){lock(gate){generation++;moving=false;}}
 public long Version{get{lock(gate){return generation;}}}
 public bool WhenIdleIfCurrent(long expected,Action action){lock(gate){if(moving||generation!=expected)return false;action();return true;}}
 public bool WhenIdle(Action action){lock(gate){if(moving)return false;action();return true;}}
 public void Move(long id,MousePoint target,int speed,MouseBounds bounds){
  if(speed<200||speed>3000||!bounds.Contains(target))throw new ArgumentException();
  long token;MousePoint from;lock(gate){token=++generation;from=read();moving=true;}
  double distance=Math.Sqrt(Math.Pow(target.X-from.X,2)+Math.Pow(target.Y-from.Y,2));
  double duration=Math.Max(80,Math.Min(60000,distance*1000/speed));
  ThreadPool.QueueUserWorkItem(delegate{
   try{
    Stopwatch clock=Stopwatch.StartNew();bool firstFrame=true;
    while(true){double elapsed=clock.Elapsed.TotalMilliseconds;
     lock(gate){if(token!=generation)return;if(!valid(bounds,target)){throw new InvalidOperationException();}write(Interpolate(from,target,elapsed/duration));if(firstFrame){firstFrame=false;if(Started!=null)Started(id);}}
     if(elapsed>=duration)break;Thread.Sleep(8);
    }
    lock(gate){if(token!=generation)return;MousePoint arrived=read();if(arrived.X!=target.X||arrived.Y!=target.Y)throw new InvalidOperationException();moving=false;if(Done!=null)Done(id);}
   }catch{lock(gate){if(token==generation){generation++;moving=false;if(Failed!=null)Failed();}}}
  });
 }
}
// Single atomic down/up batch, followed by independent checked release attempts.
public static class MouseClickEngine {
 public static bool Release(Func<uint[],uint> inject){for(int i=0;i<3;i++){try{if(inject(new uint[]{4,16})==2)return true;}catch{}}return false;}
 public static string Execute(string button,Func<bool> held,Func<uint[],uint> inject){
  if(button!="left"&&button!="right")return "error";
  try{if(held())return "busy";}catch{return "error";}
  string result="error";
  try{if(inject(button=="left"?new uint[]{2,4}:new uint[]{8,16})==2)result="ok";}catch{}
  finally{if(!Release(inject))result="release-error";}
  return result;
 }
}
public sealed class MouseClickWindow {public long Window;public int Pid;public bool Visible,Transparent,Minimized,Cloaked;public MouseBounds Bounds;}
// One wheel stream, bounded cadence and lifetime; no cursor writes or key input.
public sealed class MouseWheelEngine {
 readonly object gate=new object();readonly Func<bool> valid;readonly Func<int,bool> inject;readonly Func<long> now;
 bool active;int direction;long deadline,next;
 public MouseWheelEngine(Func<bool> valid,Func<int,bool> inject,Func<long> now){this.valid=valid;this.inject=inject;this.now=now;}
 public bool Active{get{lock(gate){return active;}}}
 public void Stop(){lock(gate){active=false;}}
 public string Start(int direction,bool continuous){lock(gate){
  if(direction!=1&&direction!=-1){active=false;return "error";}
  if(active&&continuous){try{if(!valid()){active=false;return "target";}}catch{active=false;return "error";}this.direction=direction;return "ok";}
  active=false;this.direction=direction;
  try{if(!valid())return "target";if(!inject(direction*(continuous?15:120)))return "error";}
  catch{return "error";}
  if(continuous){active=true;deadline=now()+30000;next=now()+250;}return "ok";
 }}
 public string Tick(){lock(gate){
  if(!active)return "idle";
  if(now()>=deadline){active=false;return "limit";}
  if(now()<next)return "active";
  try{if(!valid()){active=false;return "target";}if(!inject(direction*15)){active=false;return "error";}}
  catch{active=false;return "error";}
  next=now()+250;return "active";
 }}
}
public sealed class MouseWheelPosition {public long Window,Owner,Foreground;public int Pid;public uint Routing;public bool Available,InMenu,ButtonsHeld;public MousePoint Point;}
public static class MouseWheelBinding {
 public static string Check(MouseWheelPosition p,int ownPid,int helperPid){
  if(p==null||!p.Available||p.Window==0||p.Owner==0||p.Pid<=0||p.Pid==ownPid||p.Pid==helperPid)return "target";
  if(p.InMenu||p.ButtonsHeld)return "busy";return p.Routing==2?"ok":"routing";
 }
 public static bool Same(MouseWheelPosition a,MouseWheelPosition b,int ownPid,int helperPid){return a!=null&&Check(b,ownPid,helperPid)=="ok"&&a.Window==b.Window&&a.Owner==b.Owner&&a.Pid==b.Pid&&a.Foreground==b.Foreground&&a.Point.X==b.Point.X&&a.Point.Y==b.Point.Y;}
}
public static class MouseClickTarget {
 public static MouseClickWindow Select(System.Collections.Generic.IEnumerable<MouseClickWindow> windows,MousePoint point,int ownerPid,int helperPid){
  foreach(var window in windows)if(window.Visible&&!window.Transparent&&!window.Minimized&&!window.Cloaked&&window.Pid!=ownerPid&&window.Pid!=helperPid&&window.Bounds.Contains(point))return window;return null;
 }
}
sealed class NativeClickState {public volatile bool Unsafe;public int Pending;public readonly ManualResetEvent Finished=new ManualResetEvent(true);}
public static class PhysicalMouse {
 [StructLayout(LayoutKind.Sequential)]struct Rect {public int L,T,R,B;}
 [StructLayout(LayoutKind.Sequential)]struct MonitorInfo {public int Size;public Rect Monitor,Work;public uint Flags;}
 [DllImport("user32.dll")]static extern bool GetPhysicalCursorPos(out MousePoint point);
 [DllImport("user32.dll")]static extern bool SetPhysicalCursorPos(int x,int y);
 [DllImport("user32.dll")]static extern IntPtr SetThreadDpiAwarenessContext(IntPtr context);
 [DllImport("user32.dll")]static extern IntPtr MonitorFromPoint(MousePoint point,uint flags);
 [DllImport("user32.dll")]static extern bool GetMonitorInfo(IntPtr monitor,ref MonitorInfo info);
 [StructLayout(LayoutKind.Sequential)]struct MouseInput {public int X,Y;public uint Data,Flags,Time;public UIntPtr Extra;}
 [StructLayout(LayoutKind.Sequential)]struct Input {public uint Type;public MouseInput Mouse;}
 [DllImport("user32.dll",SetLastError=true)]static extern uint SendInput(uint count,Input[] inputs,int size);
 [DllImport("user32.dll")]static extern short GetAsyncKeyState(int key);
 [DllImport("user32.dll")]static extern IntPtr WindowFromPoint(MousePoint point);
 [DllImport("user32.dll")]static extern IntPtr GetAncestor(IntPtr window,uint flags);
 [DllImport("user32.dll")]static extern uint GetWindowThreadProcessId(IntPtr window,out uint pid);
 [DllImport("user32.dll")]static extern IntPtr GetForegroundWindow();
 [DllImport("user32.dll")]static extern bool SystemParametersInfo(uint action,uint param,out uint value,uint flags);
 [DllImport("user32.dll")]static extern bool ScreenToClient(IntPtr window,ref MousePoint point);
 [DllImport("user32.dll")]static extern IntPtr ChildWindowFromPointEx(IntPtr window,MousePoint point,uint flags);
 [StructLayout(LayoutKind.Sequential)]struct GuiThreadInfo {public uint Size,Flags;public IntPtr Active,Focus,Capture,MenuOwner,MoveSize,Caret;public Rect CaretRect;}
 [DllImport("user32.dll")]static extern bool GetGUIThreadInfo(uint thread,ref GuiThreadInfo info);
 delegate bool EnumWindowProc(IntPtr window,IntPtr param);
 [DllImport("user32.dll")]static extern bool EnumWindows(EnumWindowProc callback,IntPtr param);
 [DllImport("user32.dll")]static extern bool IsWindowVisible(IntPtr window);
 [DllImport("user32.dll")]static extern bool IsIconic(IntPtr window);
 [DllImport("user32.dll")]static extern bool GetWindowRect(IntPtr window,out Rect rectangle);
 [DllImport("user32.dll",EntryPoint="GetWindowLongPtrW")]static extern IntPtr GetWindowLongPtr64(IntPtr window,int index);
 [DllImport("user32.dll",EntryPoint="GetWindowLongW")]static extern int GetWindowLong32(IntPtr window,int index);
 [DllImport("dwmapi.dll")]static extern int DwmGetWindowAttribute(IntPtr window,uint attribute,out int value,int size);
 static MouseClickWindow WindowData(IntPtr window){
  uint pid;Rect r;int cloaked=0;GetWindowThreadProcessId(window,out pid);GetWindowRect(window,out r);DwmGetWindowAttribute(window,14,out cloaked,4);
  long style=IntPtr.Size==8?GetWindowLongPtr64(window,-20).ToInt64():GetWindowLong32(window,-20);
  return new MouseClickWindow{Window=window.ToInt64(),Pid=(int)pid,Visible=IsWindowVisible(window),Minimized=IsIconic(window),Transparent=(style&0x20)!=0,Cloaked=cloaked!=0,Bounds=new MouseBounds{X=r.L,Y=r.T,Width=r.R-r.L,Height=r.B-r.T}};
 }
 static MouseClickWindow ClickOwner(MousePoint point,int ownerPid){
  int helperPid=System.Diagnostics.Process.GetCurrentProcess().Id;IntPtr hit=GetAncestor(WindowFromPoint(point),2);
  if(hit!=IntPtr.Zero){var direct=WindowData(hit);var selected=MouseClickTarget.Select(new MouseClickWindow[]{direct},point,ownerPid,helperPid);if(selected!=null)return selected;}
  var windows=new System.Collections.Generic.List<MouseClickWindow>();EnumWindows(delegate(IntPtr w,IntPtr p){if(windows.Count>=256)return false;windows.Add(WindowData(w));return true;},IntPtr.Zero);
  return MouseClickTarget.Select(windows,point,ownerPid,helperPid);
 }
 static uint Inject(uint[] flags){Input[] inputs=new Input[flags.Length];for(int i=0;i<flags.Length;i++)inputs[i].Mouse.Flags=flags[i];return SendInput((uint)inputs.Length,inputs,Marshal.SizeOf(typeof(Input)));}
 static bool InjectWheel(int delta){Input input=new Input();input.Mouse.Flags=0x800;input.Mouse.Data=unchecked((uint)delta);return SendInput(1,new Input[]{input},Marshal.SizeOf(typeof(Input)))==1;}
 static bool MenuState(IntPtr window,out bool menu){uint pid;uint thread=GetWindowThreadProcessId(window,out pid);var info=new GuiThreadInfo();info.Size=(uint)Marshal.SizeOf(typeof(GuiThreadInfo));menu=false;if(thread==0||!GetGUIThreadInfo(thread,ref info))return false;menu=(info.Flags&0x1C)!=0;return true;}
 static MouseWheelPosition WheelPosition(int ownerPid){
  SetThreadDpiAwarenessContext(new IntPtr(-4));var result=new MouseWheelPosition();MousePoint point;
  if(!GetPhysicalCursorPos(out point))return result;result.Point=point;
  IntPtr direct=GetAncestor(WindowFromPoint(point),2);if(direct==IntPtr.Zero)return result;
  var hit=WindowData(direct);if(hit.Pid==ownerPid&&!hit.Transparent)return result;
  var owner=ClickOwner(point,ownerPid);if(owner==null)return result;
  IntPtr target=new IntPtr(owner.Window),child=target;
  for(int n=0;n<12;n++){MousePoint local=point;if(!ScreenToClient(child,ref local))return result;IntPtr next=ChildWindowFromPointEx(child,local,7);if(next==IntPtr.Zero||next==child)break;child=next;}
  uint pid;GetWindowThreadProcessId(child,out pid);if(pid!=(uint)owner.Pid)return result;
  IntPtr foreground=GetForegroundWindow();bool targetMenu,foregroundMenu;
  if(!MenuState(target,out targetMenu)||!MenuState(foreground,out foregroundMenu))return result;
  uint routing;if(!SystemParametersInfo(0x201C,0,out routing,0))return result;
  result.Window=child.ToInt64();result.Owner=owner.Window;result.Pid=owner.Pid;result.Foreground=foreground.ToInt64();result.Routing=routing;
  result.InMenu=targetMenu||foregroundMenu;result.ButtonsHeld=(GetAsyncKeyState(1)&0x8000)!=0||(GetAsyncKeyState(2)&0x8000)!=0;result.Available=true;return result;
 }
 static readonly object output=new object();
 static void ClickReply(long request,string outcome,uint pid,IntPtr owner,MousePoint point){Emit("CLICK|"+request.ToString(CultureInfo.InvariantCulture)+"|"+outcome+"|"+pid.ToString(CultureInfo.InvariantCulture)+"|"+owner.ToInt64().ToString(CultureInfo.InvariantCulture)+"|"+point.X.ToString(CultureInfo.InvariantCulture)+"|"+point.Y.ToString(CultureInfo.InvariantCulture));}
 static void Emit(string line){lock(output){Console.WriteLine(line);Console.Out.Flush();}}
 static bool Valid(MouseBounds bounds,MousePoint target){
  SetThreadDpiAwarenessContext(new IntPtr(-4));
  MonitorInfo m=new MonitorInfo();m.Size=Marshal.SizeOf(typeof(MonitorInfo));IntPtr h=MonitorFromPoint(target,0);
  return h!=IntPtr.Zero&&GetMonitorInfo(h,ref m)&&m.Monitor.L==bounds.X&&m.Monitor.T==bounds.Y&&m.Monitor.R-bounds.X==bounds.Width&&m.Monitor.B-bounds.Y==bounds.Height;
 }
 public static void Run(){Run(0);}
 public static void Run(int ownerPid){
  SetThreadDpiAwarenessContext(new IntPtr(-4));
  MouseMotionEngine engine=new MouseMotionEngine(
   delegate{MousePoint p;if(!GetPhysicalCursorPos(out p))throw new InvalidOperationException();return p;},
   delegate(MousePoint p){if(!SetPhysicalCursorPos(p.X,p.Y))throw new InvalidOperationException();},Valid);
  if(Environment.GetEnvironmentVariable("JEFFREY_MOUSE_DIAGNOSTICS")=="1")engine.Started+=delegate(long id){Emit("START|"+id.ToString(CultureInfo.InvariantCulture));};
  engine.Done+=delegate(long id){Emit("DONE|"+id.ToString(CultureInfo.InvariantCulture));};engine.Failed+=delegate{Emit("ERROR|movement");};
  var clicks=new NativeClickState();long lastClickRequest=0;
  object wheelGate=new object();MouseWheelPosition wheelTarget=null;long wheelRequest=0,lastWheelRequest=0;
  int helperPid=System.Diagnostics.Process.GetCurrentProcess().Id;Stopwatch wheelClock=Stopwatch.StartNew();
  var wheel=new MouseWheelEngine(delegate{return MouseWheelBinding.Same(wheelTarget,WheelPosition(ownerPid),ownerPid,helperPid);},InjectWheel,delegate{return wheelClock.ElapsedMilliseconds;});
  var wheelTimer=new Timer(delegate{lock(wheelGate){if(!wheel.Active)return;string code=wheel.Tick();if(!wheel.Active)try{Emit("WHEEL-END|"+wheelRequest.ToString(CultureInfo.InvariantCulture)+"|"+code);}catch{wheel.Stop();}}},null,250,250);
  Emit("READY");
  try{string line;while((line=Console.ReadLine())!=null){
   if(line=="STOP-SCROLL"){lock(wheelGate){wheel.Stop();}continue;}
   if(line=="STOP"){lock(wheelGate){wheel.Stop();}engine.Stop();if(clicks.Unsafe)clicks.Unsafe=!MouseClickEngine.Release(Inject);continue;}
   if(line=="RELEASE"){lock(wheelGate){wheel.Stop();}engine.Stop();clicks.Unsafe=!MouseClickEngine.Release(Inject);Emit(clicks.Unsafe?"RELEASE|error":"RELEASE|ok");continue;}
   if(line.StartsWith("SCROLL ",StringComparison.Ordinal)){
    string[] scroll=line.Split(' ');long request;
    if(scroll.Length!=4||!Int64.TryParse(scroll[1],out request)||request<1||(scroll[2]!="up"&&scroll[2]!="down")||(scroll[3]!="slow"&&scroll[3]!="step")){lock(wheelGate){wheel.Stop();}Emit("ERROR|scroll-command");continue;}
    string outcome="cancelled";
    if(request>lastWheelRequest){lastWheelRequest=request;
     if(clicks.Unsafe||Interlocked.CompareExchange(ref clicks.Pending,0,0)!=0)outcome="busy";
     else if(!engine.WhenIdle(delegate{lock(wheelGate){
      try{
       var target=WheelPosition(ownerPid);outcome=MouseWheelBinding.Check(target,ownerPid,helperPid);
       if(outcome!="ok"){wheel.Stop();return;}
       if(!MouseWheelBinding.Same(wheelTarget,target,ownerPid,helperPid))wheel.Stop();
       wheelTarget=target;wheelRequest=request;outcome=wheel.Start(scroll[2]=="up"?1:-1,scroll[3]=="slow");
      }catch{wheel.Stop();outcome="error";}
     }}))outcome="busy";
    }
    Emit("WHEEL|"+request.ToString(CultureInfo.InvariantCulture)+"|"+outcome);continue;
   }
   if(line.StartsWith("CLICK ",StringComparison.Ordinal)){
    lock(wheelGate){wheel.Stop();}
    string[] click=line.Split(' ');long request;
    if(click.Length!=3||!Int64.TryParse(click[1],out request)||request<1||(click[2]!="left"&&click[2]!="right")){Emit("ERROR|click-command");continue;}
    if(request<=lastClickRequest){ClickReply(request,"cancelled",0,IntPtr.Zero,new MousePoint());continue;}lastClickRequest=request;
    if(clicks.Unsafe){ClickReply(request,"release-error",0,IntPtr.Zero,new MousePoint());continue;}
    if(Interlocked.CompareExchange(ref clicks.Pending,1,0)!=0){ClickReply(request,"busy",0,IntPtr.Zero,new MousePoint());continue;}
    long version=0;if(!engine.WhenIdle(delegate{version=engine.Version;})){Interlocked.Exchange(ref clicks.Pending,0);ClickReply(request,"busy",0,IntPtr.Zero,new MousePoint());continue;}
    clicks.Finished.Reset();string button=click[2];long requestId=request,expected=version;
    ThreadPool.QueueUserWorkItem(delegate{
     string outcome="error";uint pid=0;IntPtr owner=IntPtr.Zero;MousePoint point=new MousePoint();
     try{
      SetThreadDpiAwarenessContext(new IntPtr(-4));
      if(GetPhysicalCursorPos(out point)){
       var selected=ClickOwner(point,ownerPid);if(selected!=null){owner=new IntPtr(selected.Window);pid=(uint)selected.Pid;}
       if(!engine.WhenIdleIfCurrent(expected,delegate{
        MousePoint actual;if(!GetPhysicalCursorPos(out actual)||actual.X!=point.X||actual.Y!=point.Y){outcome="cancelled";return;}
        outcome=MouseClickEngine.Execute(button,delegate{return (GetAsyncKeyState(1)&0x8000)!=0||(GetAsyncKeyState(2)&0x8000)!=0;},Inject);
       }))outcome="cancelled";
      }
      if(outcome=="release-error"){clicks.Unsafe=true;engine.Stop();}
     }catch{outcome="error";}
     finally{Interlocked.Exchange(ref clicks.Pending,0);clicks.Finished.Set();}
     try{ClickReply(requestId,outcome,pid,owner,point);}catch{}
    });
    continue;
   }
   string[] p=line.Split(' ');long id;int x,y,speed,bx,by,bw,bh;
   if(p.Length!=9||p[0]!="MOVE"||!Int64.TryParse(p[1],out id)||id<1||!Int32.TryParse(p[2],out x)||!Int32.TryParse(p[3],out y)||!Int32.TryParse(p[4],out speed)||!Int32.TryParse(p[5],out bx)||!Int32.TryParse(p[6],out by)||!Int32.TryParse(p[7],out bw)||!Int32.TryParse(p[8],out bh)||Math.Abs((long)x)>65536||Math.Abs((long)y)>65536||bw<1||bh<1||bw>65536||bh>65536||Math.Abs((long)bx)>65536||Math.Abs((long)by)>65536){engine.Stop();Emit("ERROR|command");continue;}
   if(clicks.Unsafe){Emit("ERROR|movement");continue;}
   lock(wheelGate){wheel.Stop();}
   try{engine.Move(id,new MousePoint(x,y),speed,new MouseBounds{X=bx,Y=by,Width=bw,Height=bh});}catch{engine.Stop();Emit("ERROR|movement");}
  }}finally{lock(wheelGate){wheel.Stop();}wheelTimer.Dispose();engine.Stop();clicks.Finished.WaitOne(2000);if(clicks.Unsafe)MouseClickEngine.Release(Inject);}
 }
}
