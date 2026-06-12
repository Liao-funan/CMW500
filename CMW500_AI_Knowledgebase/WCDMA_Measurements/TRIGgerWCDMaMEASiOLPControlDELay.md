# TRIGgerWCDMaMEASiOLPControlDELay

Module: WCDMA Measurements
Source: 36eac9699a554164.htm

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
TRIGger:WCDMa:MEAS<i>:OLPControl:DELay
TRIGger:WCDMa:MEAS<i>:OLPControl:DELay 
<Delay>
Defines a time delaying the start of the measurement relative to the trigger event. The delay is useful if the trigger event and the uplink DPCH slot border are not synchronous. A measurement starts always at an uplink DPCH slot border. Triggering a measurement at another time can yield a synchronization error.
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
V3.5.20
Manual operation: 
See 
"Trigger Delay"
Top