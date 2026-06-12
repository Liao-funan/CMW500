# TRIGgerWCDMaMEASiNBMEValuationTOUT

Module: WCDMA NodeB Measurements
Source: 39e2e317b21b4019.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WCDMa:MEAS<i>:NB:MEValuation:TOUT
TRIGger:WCDMa:MEAS<i>:NB:MEValuation:TOUT 
<TimeOut>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<TimeOut>
Range: 
0.01 s  to  10 s
*RST:
2 s
Default unit: 
s
Additional parameters: OFF | ON (disables | enables the timeout)
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Trigger Time Out"
Top