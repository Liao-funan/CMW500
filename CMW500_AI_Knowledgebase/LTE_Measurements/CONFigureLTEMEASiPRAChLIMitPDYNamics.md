# CONFigureLTEMEASiPRAChLIMitPDYNamics

Module: LTE Measurements
Source: d7342691e55333.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Limits (Power)
 > 
CONFigure:LTE:MEAS<i>:PRACh:LIMit:PDYNamics
CONFigure:LTE:MEAS<i>:PRACh:LIMit:PDYNamics 
<Enable>, <OnPowerUpper>, <OnPowerLower>, <OffPowerUpper>
Defines limits for the ON power and OFF power determined with the power dynamics measurement.
Parameters:
<Enable>
OFF |
 
 ON
OFF
: disables the limit check
ON
: enables the limit check
*RST:
ON
<OnPowerUpper>
Upper limit for the ON power
Range: 
-256 dBm  to  256 dBm
*RST:
6.5 dBm
Default unit: 
dBm
<OnPowerLower>
Lower limit for the ON power
Range: 
-256 dBm  to  256 dBm
*RST:
-8.5 dBm
Default unit: 
dBm
<OffPowerUpper>
Upper limit for the OFF power
Range: 
-256 dBm  to  256 dBm
*RST:
-48.5 dBm
Default unit: 
dBm
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Limits"
Top