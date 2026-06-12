# CONFigureWCDMaMEASiTPCLIMitILPControlMAXPowerACTive

Module: WCDMA Measurements
Source: eb8fdcbd32e04757.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Limits
 > 
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:MAXPower:ACTive?
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:MAXPower:ACTive? 
Queries the active limit values for the "Inner Loop Power Control" mode.
These limit values result either from the configured UE power class or from the reported UE power class or have been defined manually.
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
V2.1.20
Manual operation: 
See 
"Limits"
Top