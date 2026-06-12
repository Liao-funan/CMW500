# TRIGgerWCDMaMEASiTPCSOURce

Module: WCDMA Measurements
Source: c2ff5500c6084f9f.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WCDMa:MEAS<i>:TPC:SOURce
TRIGger:WCDMa:MEAS<i>:TPC:SOURce 
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
V2.1.20
Manual operation: 
See 
"Trigger Source"
Top