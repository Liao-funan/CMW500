# SENSeWCDMaSIGNiUECapabilityUEPosition

Module: WCDMA Signaling
Source: 11e3823a40854bd5.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition?
SENSe:WCDMa:SIGN<i>:UECapability:UEPosition? 
Returns UE capability information related to UE positioning.
Return values: 
<LocationMethod>
NO |
 
 YES
Indicates if a UE can measure its location by some means unrelated to UTRAN (e.g. if the UE has access to a standalone GPS receiver)
<NetworkAGPS>
NONE |
 
 NETWork |
 
 UE |
 
 BOTH
Indicates if a UE supports the assisted GPS schemes network-based and/or UE-based
<RefTimeGPS>
NO |
 
 YES
Indicates UE capability to measure GPS reference time as defined in 3GPP TS 25.215
<IPDL>
NO |
 
 YES
Indicates UE capability to use idle periods in the downlink (IPDL) to enhance its "SFN-SFN observed time difference – type 2" measurement
<OTDOA>
NO |
 
 YES
Indicates if a UE supports the observed time difference of arrival (OTDOA) UE-based schemes
<RXTXTimeDiff>
NO |
 
 YES
Indicates UE capability to measure the Rx-Tx time difference type 2
<CELLURAPCH>
NO |
 
 YES
Indicates whether the UE positioning measurements using the assisted GPS method are valid in CELL_PCH and URA_PCH RRC states
<SFNSFNTimeDiff>
NO |
 
 YES
Indicates UE capability to perform the SFN-SFN observed time difference type 2 measurement
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"UE Position"
Top