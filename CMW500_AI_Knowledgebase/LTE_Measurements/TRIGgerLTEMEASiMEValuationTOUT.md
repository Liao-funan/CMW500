# TRIGgerLTEMEASiMEValuationTOUT

Module: LTE Measurements
Source: abc469c327e4458e.htm

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
TRIGger:LTE:MEAS<i>:MEValuation:TOUT
TRIGger:LTE:MEAS<i>:MEValuation:TOUT 
<TriggerTimeOut>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<TriggerTimeOut>
Range: 
0.01 s  to  167772.15 s
*RST:
0.1 s
Default unit: 
s
Additional parameters: OFF | ON (disables | enables the timeout)
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Trigger Timeout"
Top