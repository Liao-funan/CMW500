# SENSeLTESIGNiUEReport[PCC]SCELlRANGe

Module: LTE Signaling
Source: 30475df1bca4487f.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Measurement Report Contents
 > 
SENSe:LTE:SIGN<i>:UEReport[:PCC]:SCELl:RANGe?
SENSe:LTE:SIGN<i>:UEReport[:PCC]:SCELl:RANGe? 
SENSe:LTE:SIGN<i>:UEReport:SCC<c>:SCELl:RANGe? 
Returns the value ranges corresponding to the dimensionless index values reported for the serving LTE cell.
Suffix: 
<c>
1..4
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
-34 dB  to  2.5 dB
Default unit: 
dB
<RSRQupper>
RSRQ maximum value
Range: 
-34 dB  to  2.5 dB
Default unit: 
dB
Example: 
See 
"Querying UE Measurement Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.0.50, SCC command V3.2.70
Manual operation: 
See 
"LTE Serving Cell > RSRP"
Top