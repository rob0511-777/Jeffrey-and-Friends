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
  Emit("READY");
  try{string line;while((line=Console.ReadLine())!=null){
   if(line=="STOP"){engine.Stop();if(clicks.Unsafe)clicks.Unsafe=!MouseClickEngine.Release(Inject);continue;}
   if(line=="RELEASE"){engine.Stop();clicks.Unsafe=!MouseClickEngine.Release(Inject);Emit(clicks.Unsafe?"RELEASE|error":"RELEASE|ok");continue;}
   if(line.StartsWith("CLICK ",StringComparison.Ordinal)){
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
   try{engine.Move(id,new MousePoint(x,y),speed,new MouseBounds{X=bx,Y=by,Width=bw,Height=bh});}catch{engine.Stop();Emit("ERROR|movement");}
  }}finally{engine.Stop();clicks.Finished.WaitOne(2000);if(clicks.Unsafe)MouseClickEngine.Release(Inject);}
 }
}
