# TRIGgerGSMMEASiMEValuationSOURce

Module: GSM Measurements
Source: e4e772f66a654986.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:GSM:MEAS<i>:MEValuation:SOURce
TRIGger:GSM:MEAS<i>:MEValuation:SOURce 
<Source>
Selects the source of the trigger events. Some values are always available in this firmware application. They are listed below. Depending on the installed options, additional values are available. A complete list of all supported values can be displayed using 
TRIGger:...:CATalog:SOURce?
.
Parameters:
<Source>
'Power'
: Power trigger (received RF power)
'Acquisition'
: Frame trigger according to defined burst pattern
'Free Run'
: Free run (untriggered)
*RST:
'Power'
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Trigger Source"
Top