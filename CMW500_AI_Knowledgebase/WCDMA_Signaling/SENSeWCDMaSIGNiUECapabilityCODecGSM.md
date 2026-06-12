# SENSeWCDMaSIGNiUECapabilityCODecGSM

Module: WCDMA Signaling
Source: 3dab6c799ba34573.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:CODec:GSM?
SENSe:WCDMa:SIGN<i>:UECapability:CODec:GSM? 
SENSe:WCDMa:SIGN<i>:UECapability:CODec:UMTS? 
Indicates codec list supported by the UE in GSM and UMTS networks.
The number to the left of each result parameter is provided for easy identification of the parameter position within the result array.
Return values: 
<Supported>
NO |
 
 YES
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
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Codec List"
Top