# TRIGgerWCDMaMEASiMEValuationTOUT

Module: WCDMA Measurements
Source: 3a19b503303747d1.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WCDMa:MEAS<i>:MEValuation:TOUT
TRIGger:WCDMa:MEAS<i>:MEValuation:TOUT 
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
Additional OFF | ON disables/enables the timeout
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V1.0.4.11
V3.0.10: OFF | ON added
Manual operation: 
See 
"Trigger Time Out"
Top