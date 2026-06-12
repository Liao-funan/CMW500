# TRIGgerGPRFMEASiIQVSlotTOUT

Module: GPRF Measurements
Source: c8226d3f8d2b41e1.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:GPRF:MEAS<i>:IQVSlot:TOUT
TRIGger:GPRF:MEAS<i>:IQVSlot:TOUT 
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
Options: 
R&S CMW-KM011
Manual operation: 
See 
"Trigger Timeout"
Top