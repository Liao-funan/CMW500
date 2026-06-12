# TRIGgerWCDMaMEASiOLPControlTOUT

Module: WCDMA Measurements
Source: 7b1d1bfd6d264612.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Command Reference
 > 
DPCCH Open Loop Power Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WCDMa:MEAS<i>:OLPControl:TOUT
TRIGger:WCDMa:MEAS<i>:OLPControl:TOUT 
<TimeOut>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<TimeOut>
Range: 
0.01 s  to  60 s
*RST:
20 s
Default unit: 
s
Additional parameters: OFF | ON (disables | enables the timeout)
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Trigger Time Out"
Top