# SENSeGSMSIGNiRREPortNCELlWCDMaCELLnoRANGe

Module: GSM Signaling
Source: 2258d0e246e34b8a.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
Neighbor Cell Measurement Reports
 > 
SENSe:GSM:SIGN<i>:RREPort:NCELl:WCDMa:CELL<no>:RANGe?
SENSe:GSM:SIGN<i>:RREPort:NCELl:WCDMa:CELL<no>:RANGe? 
Returns the value ranges corresponding to the dimensionless index values reported for a selected WCDMA neighbor cell.
Suffix: 
<no>
1..4
Selects the WCDMA neighbor cell
Return values: 
<RSCPlower>
RSCP minimum value
Range: 
-120 dBm  to  -25 dBm
Default unit: 
dBm
<RSCPupper>
RSCP maximum value
Range: 
-120 dBm  to  -25 dBm
Default unit: 
dBm
<EcNOlower>
Ec/No minimum value
Range: 
-24 dB  to  0 dB
Default unit: 
dB
<EcNOupper>
Ec/No maximum value
Range: 
-24 dB  to  0 dB
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
"WCDMA > RSCP, EcNO"
Top