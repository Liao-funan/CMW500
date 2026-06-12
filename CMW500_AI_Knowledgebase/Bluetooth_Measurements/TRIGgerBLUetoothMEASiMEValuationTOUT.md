# TRIGgerBLUetoothMEASiMEValuationTOUT

Module: Bluetooth Measurements
Source: 6afdc11d6602430c.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:BLUetooth:MEAS<i>:MEValuation:TOUT
TRIGger:BLUetooth:MEAS<i>:MEValuation:TOUT 
<TriggerTimeout>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode.
Parameters:
<TriggerTimeout>
Range: 
0.01 s  to  167772.15 s
Increment: 
0.001 s
*RST:
1 s
Additional parameters: OFF | ON (disables timeout | enables timeout using the previous/default values)
Example: 
See 
"Basic Input Signal Properties: EDR Packets"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Trigger Timeout"
Top