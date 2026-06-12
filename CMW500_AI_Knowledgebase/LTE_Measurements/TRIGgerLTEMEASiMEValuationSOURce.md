# TRIGgerLTEMEASiMEValuationSOURce

Module: LTE Measurements
Source: 42f7e25590874326.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:LTE:MEAS<i>:MEValuation:SOURce
TRIGger:LTE:MEAS<i>:MEValuation:SOURce 
<Source>
Selects the source of the trigger events. Some values are always available in this firmware application. They are listed below. Depending on the installed options, additional values are available. A complete list of all supported values can be displayed using 
TRIGger:...:CATalog:SOURce?
.
Parameters:
<Source>
'Free Run (Fast Sync)'
Free run with synchronization
'Free Run (No Sync)'
Free run without synchronization
'IF Power'
Power trigger (received RF power)
*RST:
'IF Power'
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V1.0.10.1
V2.0.10: 'Free Run (No Sync)' added
Manual operation: 
See 
"Trigger Source"
Top