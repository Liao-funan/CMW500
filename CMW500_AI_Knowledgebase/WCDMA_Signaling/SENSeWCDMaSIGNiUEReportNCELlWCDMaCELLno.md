# SENSeWCDMaSIGNiUEReportNCELlWCDMaCELLno

Module: WCDMA Signaling
Source: 53bc4b0d4d6346ef.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Measurement Reports
 > 
SENSe:WCDMa:SIGN<i>:UEReport:NCELl:WCDMa:CELL<no>?
SENSe:WCDMa:SIGN<i>:UEReport:NCELl:WCDMa:CELL<no>? 
Returns the UE measurement report contents for WCDMA neighbor cell. See also 
"Neighbor Cells UTRA FDD"
.
Suffix: 
<no>
*
Selects the WCDMA neighbor cell
Return values: 
<RSCP>
CPICH RSCP: low and high value range
Range: 
-120 dBm to -25 dBm
Default unit: 
dBm
<ECN0>
CPICH Ec/No: low and high value range
Range: 
-24 dB to 0 dB
Default unit: 
dB
<RSSI>
CPICH RSSI
Range: 
-50 dBm  to  34 dBm
Default unit: 
dBm
<SFNCFN>
SFN-CFN time difference: low end high value range
Range: 
768 chips to 1280 chips
Default unit: 
chips
<Pathloss>
Range: 
46 dB to 158 dB
Default unit: 
dB
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Neighbor Cells UTRA FDD"
Top