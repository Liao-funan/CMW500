# CONFigureNIOTMEASiMEValuationLIMitPDYNamics

Module: NBIoT Measurements
Source: 6a444dfcfc3c4af4.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits Power
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:PDYNamics
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:PDYNamics 
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
Upper limit for the "ON power"
Range: 
-256 dBm  to  256 dBm
*RST:
-3.5 dBm
Default unit: 
dBm
<OnPowerLower>
Lower limit for the "ON power"
Range: 
-256 dBm  to  256 dBm
*RST:
-18.5 dBm
Default unit: 
dBm
<OffPowerUpper>
Upper limit for the "OFF power"
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
V3.5.10, V3.7.20: reset values adapted to specification changes
Top