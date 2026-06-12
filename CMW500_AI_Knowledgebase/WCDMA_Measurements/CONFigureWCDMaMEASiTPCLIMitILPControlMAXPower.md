# CONFigureWCDMaMEASiTPCLIMitILPControlMAXPower

Module: WCDMA Measurements
Source: cfe16caac86644cc.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:MAXPower
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:MAXPower 
<Enable>, <ActiveLimit>
Enables or disables the check of the maximum UE output power limits for the "Inner Loop Power Control" mode and selects the set of limit settings to be used.
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<ActiveLimit>
USER |
 
 PC1 |
 
 PC2 |
 
 PC3 |
 
 PC3B |
 
 PC4
To use the limits defined by 3GPP, select the power class of the UE (
PC1
 to 
PC4
 = power class 1, 2, 3, 3bis, 4). To use the UE power class value reported by the UE in the capability report, see also 
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
MAXPower:
​
URPClass
.
For user-defined limit values, select 
USER
 and define the limits via 
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
MAXPower:
​
UDEFined
.
*RST:
PC4
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Limits"
Top