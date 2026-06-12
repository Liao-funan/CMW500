# SENSeWCDMaSIGNiUECapabilityIMSVoice

Module: WCDMA Signaling
Source: eebb9aa9571948a8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:IMSVoice?
SENSe:WCDMa:SIGN<i>:UECapability:IMSVoice? 
Indicates the IMS voice capability of the UE as defined in 3GPP TS 25.331, section 10.3.3.14b.
Return values: 
<VoUtraPsHs>
NO |
 
 YES
Indicates if a UE supports IMS voice over UTRA PS HSPA connections
<SrvccUtraUtra>
NO |
 
 YES
Indicates if a UE supports the single radio voice call continuity (SRVCC) from UTRA PS HS to UTRA CS
<SrvccUtraGeran>
NO |
 
 YES
Indicates if a UE supports SRVCC from UTRA PS HS to GERAN CS
<RSrvccUCsEUFdd>
NO |
 
 YES
Indicates whether the UE supports reverse single radio voice call continuity (rSRVCC) handover from UTRA CS to EUTRA FDD
<RSrvccUCsEUTdd>
NO |
 
 YES
Indicates whether the UE supports rSRVCC handover from UTRA CS to EUTRA TDD
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.70
V3.7.10: added <RSrvccUCsEUFdd>, <RSrvccUCsEUTdd>
Manual operation: 
See 
"IMS Voice"
Top