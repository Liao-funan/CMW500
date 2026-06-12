# SENSeLTESIGNiUEReportNCELlWCDMaCELLnoRANGe

Module: LTE Signaling
Source: 3bcc640f9d8c4ee4.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Measurement Report Contents
 > 
SENSe:LTE:SIGN<i>:UEReport:NCELl:WCDMa:CELL<no>:RANGe?
SENSe:LTE:SIGN<i>:UEReport:NCELl:WCDMa:CELL<no>:RANGe? 
Returns the value ranges corresponding to the dimensionless index values reported for the WCDMA neighbor cell number <no>.
Suffix: 
<no>
1..4
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
"Querying UE Measurement Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.0.50
Options: 
R&S CMW-KS510
Manual operation: 
See 
"WCDMA > RSCP, EcNO"
Top