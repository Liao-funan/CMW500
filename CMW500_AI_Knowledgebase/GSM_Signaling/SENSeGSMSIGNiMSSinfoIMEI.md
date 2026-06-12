# SENSeGSMSIGNiMSSinfoIMEI

Module: GSM Signaling
Source: 9228cbdddbad4daa.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
MS Info
 > 
SENSe:GSM:SIGN<i>:MSSinfo:IMEI?
SENSe:GSM:SIGN<i>:MSSinfo:IMEI? 
Returns the international mobile station equipment identity (IMEI) of the mobile under test.
The IMEI consists of four parts:
TAC: 8-digit type approval code
SNR: six-digit serial number
Spare: one-digit spare bit
Return values: 
<IMEI>
'TAC SNR Spare' (string variable)
Example: 
See 
"Querying MS Info"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"IMEI"
Top