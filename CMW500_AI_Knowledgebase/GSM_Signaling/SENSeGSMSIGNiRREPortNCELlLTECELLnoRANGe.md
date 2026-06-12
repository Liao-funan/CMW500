# SENSeGSMSIGNiRREPortNCELlLTECELLnoRANGe

Module: GSM Signaling
Source: 6f12f0fffa494d82.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
Neighbor Cell Measurement Reports
 > 
SENSe:GSM:SIGN<i>:RREPort:NCELl:LTE:CELL<no>:RANGe?
SENSe:GSM:SIGN<i>:RREPort:NCELl:LTE:CELL<no>:RANGe? 
Returns the value ranges corresponding to the dimensionless index values reported for a selected LTE neighbor cell.
Suffix: 
<no>
1..4
Selects the LTE neighbor cell
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
"Querying MS Measurement Reports"
Usage: 
Query only
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS210
Manual operation: 
See 
"LTE > RSRP, RSRQ"
Top