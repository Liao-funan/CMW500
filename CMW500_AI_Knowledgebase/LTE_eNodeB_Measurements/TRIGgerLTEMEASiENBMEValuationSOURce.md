# TRIGgerLTEMEASiENBMEValuationSOURce

Module: LTE eNodeB Measurements
Source: 71804525a70d40e0.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:LTE:MEAS<i>:ENB:MEValuation:SOURce
TRIGger:LTE:MEAS<i>:ENB:MEValuation:SOURce 
<Source>
Selects the source of the trigger events. Some values are always available in this firmware application. They are listed below. Depending on the installed options, additional values are available. A complete list of all supported values can be displayed using 
TRIGger:...:CATalog:SOURce?
.
Parameters:
<Source>
'Free Run (No Sync)':
 Free run without synchronization
'Free Run (Fast Sync)':
 Free run with synchronization
'IF Power':
 Power trigger (received RF power)
*RST:
'IF Power'
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V3.0.20
Top