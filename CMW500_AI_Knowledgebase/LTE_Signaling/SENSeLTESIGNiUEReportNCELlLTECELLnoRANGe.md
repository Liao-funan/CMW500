# SENSeLTESIGNiUEReportNCELlLTECELLnoRANGe

Module: LTE Signaling
Source: 3ec503e3ffea4f61.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Measurement Report Contents
 > 
SENSe:LTE:SIGN<i>:UEReport:NCELl:LTE:CELL<no>:RANGe?
SENSe:LTE:SIGN<i>:UEReport:NCELl:LTE:CELL<no>:RANGe? 
Returns the value ranges corresponding to the dimensionless index values reported for the LTE neighbor cell number <no>.
Suffix: 
<no>
1..16
Return values: 
<RSRPlower>
RSRP minimum value
Range: 
-140 dBm  to  -44 dBm
Default unit: 
dBm
<RSRPupper>
RSRP maximum value
Range: 
-140 dBm  to  -44 dBm
Default unit: 
dBm
<RSRQlower>
RSRQ minimum value
Range: 
-19.5 dB  to  -3 dB
Default unit: 
dB
<RSRQupper>
RSRQ maximum value
Range: 
-19.5 dB  to  -3 dB
Default unit: 
dB
Example: 
See 
"Querying UE Measurement Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.0.50
Options: 
R&S CMW-KS510
Manual operation: 
See 
"LTE Neighbor Cells > RSRP, RSRQ"
Top