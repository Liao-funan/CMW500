# TRIGgerGPRFMEASiIQRecorderTOUT

Module: GPRF Measurements
Source: 0a7ad2bd52394a84.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q Recorder Commands
 > 
Trigger Settings
 > 
TRIGger:GPRF:MEAS<i>:IQRecorder:TOUT
TRIGger:GPRF:MEAS<i>:IQRecorder:TOUT 
<Timeout>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<Timeout>
Range: 
0.01 s  to  300 s
*RST:
0.5 s
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