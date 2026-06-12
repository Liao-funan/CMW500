# TRIGgerWCDMaMEASiOLPControlSOURce

Module: WCDMA Measurements
Source: 1cbe87cadff74249.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Command Reference
 > 
DPCCH Open Loop Power Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WCDMa:MEAS<i>:OLPControl:SOURce
TRIGger:WCDMa:MEAS<i>:OLPControl:SOURce 
<Source>
Selects the source of the trigger events. Some values are always available in this firmware application. They are listed below. Depending on the installed options, additional values are available. A complete list of all supported values can be displayed using 
TRIGger:...:CATalog:SOURce?
.
Parameters:
<Source>
'Free Run (Standard)'
: Free run (standard synchronization)
'Free Run (Fast Sync)'
: Free run (fast synchronization)
'IF Power'
: Power trigger (normal synchronization)
'IF Power (Sync)'
: Power trigger (extended synchronization)
*RST:
'Free Run (Standard)'
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Trigger Source"
Top