# SENSeWCDMaSIGNiUEReportNCELlGSMCELLno

Module: WCDMA Signaling
Source: 76e8784907c5422b.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Measurement Reports
 > 
SENSe:WCDMa:SIGN<i>:UEReport:NCELl:GSM:CELL<no>?
SENSe:WCDMa:SIGN<i>:UEReport:NCELl:GSM:CELL<no>? 
Returns the UE measurement report contents for GSM neighbor cell. See also 
"Neighbor Cell Settings"
.
Suffix: 
<no>
*
Selects the GSM neighbor cell
Return values: 
<RSSI>
BCCH RSSI: low and high value range
Range: 
-50 dBm  to  34 dBm
Default unit: 
dBm
<BSIC>
NONVerified |
 
 VERified
NONV
: RSSI measurement without BSIC decoding
VER
: RSSI measurement with BSIC decoding
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Neighbor Cells GSM"
Top