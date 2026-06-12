# SENSeWCDMaSIGNiUEReportNCELlno

Module: WCDMA Signaling
Source: 8cccf91ae4cb4950.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Measurement Reports
 > 
SENSe:WCDMa:SIGN<i>:UEReport:NCELl<no>?
SENSe:WCDMa:SIGN<i>:UEReport:NCELl<no>? 
Returns the UE measurement report contents for additional carrier in multi-carrier operation. See also 
"UTRA FDD (Carrier 2 / Carrier 3)"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Suffix: 
<no>
2..*
Downlink carrier
Return values: 
<1_RSCP_Low> <2_RSCP_High>
Lower and upper CPICH RSCP
Range: 
-120 dBm  to  -25 dBm
Default unit: 
dBm
<3_EcNo_Low> <4_EcNo_High>
Lower and upper CPICH Ec/No
Range: 
-24 dB  to  0 dB
Default unit: 
dB
<5_RSSI_Low> <6_RSSI_High>
Lower and upper RSSI
Range: 
-50 dBm  to  34 dBm
Default unit: 
dBm
<7_TimeDiffLow> <8_TimeDiffHigh>
Lower and upper SFN-CFN time difference
Range: 
768 chips  to  1280 chips
Default unit: 
chips
<9_PathlossLow>
Lower pathloss (no upper pathloss reported)
Range: 
46 dB  to  158 dB
Default unit: 
dB
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"UTRA FDD (Carrier 2 / Carrier 3)"
Top