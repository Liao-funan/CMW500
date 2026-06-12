# TRIGgerWCDMaMEASiTPCDELay

Module: WCDMA Measurements
Source: 5e95c5c9e45f45a7.htm

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
TRIGger:WCDMa:MEAS<i>:TPC:DELay
TRIGger:WCDMa:MEAS<i>:TPC:DELay 
<Delay>
Defines a time delaying the start of the measurement relative to the trigger event. The delay is useful if the trigger event and the uplink DPCH slot border are not synchronous. A measurement starts always at an uplink DPCH slot border. Triggering a measurement at another time yields a synchronization error.
For internal trigger sources aligned to the downlink DPCH, an additional delay of 1024 chips is automatically applied. It corresponds to the assumed delay between downlink and uplink slot.
This setting has no influence on "Free Run" measurements.
Parameters:
<Delay>
Range: 
-666.7E-6 s  to  0.24 s
*RST:
0 s
Default unit: 
s
Example: 
See 
"Configuring the Trigger System"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Trigger Delay"
Top