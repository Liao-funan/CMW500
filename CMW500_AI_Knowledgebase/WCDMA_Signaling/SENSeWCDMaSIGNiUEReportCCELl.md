# SENSeWCDMaSIGNiUEReportCCELl

Module: WCDMA Signaling
Source: d74a942c361c46b7.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Measurement Reports
 > 
SENSe:WCDMa:SIGN<i>:UEReport:CCELl?
SENSe:WCDMa:SIGN<i>:UEReport:CCELl? 
Returns the UE measurement report contents for the current cell. See also 
"UTRA FDD (Current Cell)"
.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
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
<5_BLER_Low> <6_BLER_High>
Lower and upper TCH BLER
Range: 
-10  to  0
<7_TxPowerLow> <8_TxPowerHigh>
Lower and upper transmitted UE power
Range: 
-50 dBm  to  34 dBm
Default unit: 
dBm
<9_TimeDiffLow> <10_TimeDiffHigh>
Lower and upper Rx-Tx time difference
Range: 
768 chips  to  1280 chips
Default unit: 
chips
<11_PathlossLow>
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
V1.0.15.20
Manual operation: 
See 
"UTRA FDD (Current Cell)"
Top