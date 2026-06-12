# TRIGgerGPRFMEASiSPECtrumTOUT

Module: GPRF Measurements
Source: b2693409e8684043.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Trigger Settings
 > 
TRIGger:GPRF:MEAS<i>:SPECtrum:TOUT
TRIGger:GPRF:MEAS<i>:SPECtrum:TOUT 
<TriggerTimeout>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<TriggerTimeout>
Range: 
0.01 s  to  300 s
Increment: 
0.01 s
*RST:
1 s
Default unit: 
s
Additional values: OFF | ON (disables | enables the timeout check).
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.10
Options: 
R&S CMW-KM010
Manual operation: 
See 
"Trigger Timeout"
Top