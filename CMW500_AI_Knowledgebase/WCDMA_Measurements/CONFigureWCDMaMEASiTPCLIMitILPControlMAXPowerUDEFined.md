# CONFigureWCDMaMEASiTPCLIMitILPControlMAXPowerUDEFined

Module: WCDMA Measurements
Source: d5028154e52419.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:MAXPower:UDEFined
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:MAXPower:UDEFined 
<NominalMaxPower>, <UpperLimit>, <LowerLimit>
Sets the user-defined maximum output power limits for the "Inner Loop Power Control" mode. To activate the usage of this limit set, see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
TPC:
​
LIMit:
​
ILPControl:
​
MAXPower
.
Parameters:
<NominalMaxPower>
Nominal maximum output power of the UE
Range: 
-50 dBm  to  34 dBm
*RST:
21 dBm
Default unit: 
dBm
<UpperLimit>
Tolerance value for too high maximum UE power
Range: 
0 dB  to  5 dB
*RST:
2.7 dB
Default unit: 
dB
<LowerLimit>
Tolerance value for too low maximum UE power
Range: 
-5 dB  to  0 dB
*RST:
-2.7 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Limits"
Top