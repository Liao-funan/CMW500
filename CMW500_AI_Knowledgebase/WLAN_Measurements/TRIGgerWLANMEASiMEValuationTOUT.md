# TRIGgerWLANMEASiMEValuationTOUT

Module: WLAN Measurements
Source: da9f0b062c734887.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Trigger Settings
 > 
TRIGger:WLAN:MEAS<i>:MEValuation:TOUT
TRIGger:WLAN:MEAS<i>:MEValuation:TOUT 
<TrigTimeOut>
Selects the maximum time that the R&S
 
CMW waits for a trigger event before it stops the measurement in remote control mode or indicates a trigger timeout in manual operation mode. This setting has no influence on "Free Run" measurements.
Parameters:
<TrigTimeOut>
Range: 
0.01 s  to  300 s
*RST:
1 s
Default unit: 
s
Additional values: OFF | ON (disables | enables the timeout)
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V1.0.10.50
V2.1.30: reset value changed
Manual operation: 
See 
"Trigger Timeout"
Top