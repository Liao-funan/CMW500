# TRIGgerWCDMaMEASiTPCTOUT

Module: WCDMA Measurements
Source: 2bdee409a0984c5c.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WCDMa:MEAS<i>:TPC:TOUT
TRIGger:WCDMa:MEAS<i>:TPC:TOUT 
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
V2.1.20
V3.0.10: OFF | ON added
Manual operation: 
See 
"Trigger Time Out"
Top