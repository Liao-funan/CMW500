# SENSeGSMSIGNiMSSinfoIMSI

Module: GSM Signaling
Source: 8f390badf1bb4519.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
MS Info
 > 
SENSe:GSM:SIGN<i>:MSSinfo:IMSI?
SENSe:GSM:SIGN<i>:MSSinfo:IMSI? 
Returns the international mobile subscriber identity (IMSI) of the mobile under test.
The IMSI consists of three parts:
MCC: three-digit mobile country code
MNC: two- or three-digit mobile network code
MSIN: 10- or 9-digit mobile subscriber ID
Return values: 
<IMSI>
'MCC MNC MSIN' (string variable)
Example: 
See 
"Querying MS Info"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"IMSI"
Top