# SENSeGSMSIGNiMSSinfoCODecGSM

Module: GSM Signaling
Source: e3557675c5204555.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
MS Capabilities
 > 
SENSe:GSM:SIGN<i>:MSSinfo:CODec:GSM?
SENSe:GSM:SIGN<i>:MSSinfo:CODec:GSM? 
SENSe:GSM:SIGN<i>:MSSinfo:CODec:UMTS? 
Indicates codec list supported by the UE in GSM and UMTS networks.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<Supported>
OFF |
 
 ON
14 values indicate support for:
1:
 GSM FR
2:
 GSM HR
3:
 GSM EFR
4:
 FR AMR
5:
 HR AMR
6:
 UMTS AMR
7:
 UMTS AMR 2
8:
 TDMA EFR
9:
 PDC EFR
10:
 FR AMR-WB
11:
 UMTS AMR-WB
12:
 OHR AMR
13:
 OFR AMR-WB
14:
 OHR AMR-WB
Example: 
See 
"Querying MS Capabilities"
Usage: 
Query only
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Codec List"
Top