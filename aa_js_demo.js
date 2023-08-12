
//---------------------------------------------------------

 var cfg_app_version="0.01";
 var cfg_app_speed=30;

 window.onload=function()  {  aa.mainStart(cfg_app_version,cfg_app_speed,appProc);  aa.mainRun();  };

 var app=aa.main_vars.app;

//---------------------------------------------------------



 function appStart ()
 {
 app.cpu_speed=0;
 app.ei=aa.envInfoGet();
 if(app.ei.platform=="iPhone") { }
 if(app.ei.platform=="Win32")  { }
 aa.envCpuMonitorBegin(8);
 }



 function appYield ()
 {
 if(app.cpu_speed==0)
  {
  app.cpu_speed=aa.envCpuMonitorGet();
  }
 }



 function appProc ()
 {
 switch(aa.main_state.stage)
  {
  case 0:
  appStart();
  aa.mainStageSet(20);
  break;

  case 20:
  if(app.cpu_speed==0) { break; }
  aa.debugLog("cpu speed="+app.cpu_speed+" took "+aa.timerMsRunning()+"ms to analyze");
  aa.mainStageSet(40);
  break;
  }
 appYield();
 }


