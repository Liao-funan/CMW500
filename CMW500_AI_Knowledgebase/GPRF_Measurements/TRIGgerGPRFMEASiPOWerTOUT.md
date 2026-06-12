# TRIGgerGPRFMEASiPOWerTOUT

Module: GPRF Measurements
Source: 9bc05798c04c4f49.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:GPRF:MEAS<i>:POWer:TOUT
TRIGger:GPRF:MEAS<i>:POWer:TOUT 
<Timeout>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<Timeout>
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
V1.0.4.11
Manual operation: 
See 
"Trigger Timeout"
Top