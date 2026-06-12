# SENSeGSMSIGNiRREPortNCELlGSMCELLnoRANGe

Module: GSM Signaling
Source: 122b30566466493d.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
Neighbor Cell Measurement Reports
 > 
SENSe:GSM:SIGN<i>:RREPort:NCELl:GSM:CELL<no>:RANGe?
SENSe:GSM:SIGN<i>:RREPort:NCELl:GSM:CELL<no>:RANGe? 
Returns the value range corresponding to the dimensionless RSSI index value reported for a selected GSM neighbor cell.
Suffix: 
<no>
1..16
Selects the GSM neighbor cell
Return values: 
<RSSIlower>
RSSI minimum value
Range: 
-110 dBm  to  -48 dBm
Default unit: 
dBm
<RSSIupper>
RSSI maximum value
Range: 
-110 dBm  to  -48 dBm
Default unit: 
dBm
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
"GSM > RSSI"
Top