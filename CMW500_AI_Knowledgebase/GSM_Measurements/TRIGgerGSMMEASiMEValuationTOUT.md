# TRIGgerGSMMEASiMEValuationTOUT

Module: GSM Measurements
Source: 24e603a5225644b9.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:GSM:MEAS<i>:MEValuation:TOUT
TRIGger:GSM:MEAS<i>:MEValuation:TOUT 
<TriggerTimeOut>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<TriggerTimeOut>
Range: 
0.01 s  to  167.77215E+3 s
*RST:
0.1 s
Additional parameters: OFF | ON (disables timeout | enables timeout using the previous/default values)
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Trigger Timeout"
Top