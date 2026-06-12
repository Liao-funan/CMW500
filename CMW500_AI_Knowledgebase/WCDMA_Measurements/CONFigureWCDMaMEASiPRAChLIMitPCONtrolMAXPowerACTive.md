# CONFigureWCDMaMEASiPRAChLIMitPCONtrolMAXPowerACTive

Module: WCDMA Measurements
Source: 16be0a525366451a.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Limits (Power Control)
 > 
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PCONtrol:MAXPower:ACTive?
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PCONtrol:MAXPower:ACTive? 
Queries the active maximum output power limit values.
These limit values result either from the configured or reported UE power class or have been specified manually.
Return values: 
<NominalMaxPower>
Nominal maximum output power of the UE
Range: 
-50 dBm  to  34 dBm
Default unit: 
dBm
<UpperLimit>
Tolerance value for too high maximum UE power
Range: 
0 dB  to  5 dB
Default unit: 
dB
<LowerLimit>
Tolerance value for too low maximum UE power
Range: 
-5 dB  to  0 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Top