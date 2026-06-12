# CONFigureLTEMEASiSRSLIMitPDYNamics

Module: LTE Measurements
Source: d7342691e63533.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE SRS Measurement
 > 
Command Reference
 > 
SRS Measurement Commands
 > 
Limits
 > 
CONFigure:LTE:MEAS<i>:SRS:LIMit:PDYNamics
CONFigure:LTE:MEAS<i>:SRS:LIMit:PDYNamics 
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
4.9 dBm
Default unit: 
dBm
<OnPowerLower>
Lower limit for the ON power
Range: 
-256 dBm  to  256 dBm
*RST:
-10.1 dBm
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
V2.0.20
Manual operation: 
See 
"Limits"
Top