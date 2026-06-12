# SENSeLTESIGNiUECapabilityPDCPSRPRofiles

Module: LTE Signaling
Source: e5f3eaf453c84018.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
PDCP UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:PDCP:SRPRofiles?
SENSe:LTE:SIGN<i>:UECapability:PDCP:SRPRofiles? 
Returns UE capability information indicating the support of the individual robust header compression (ROHC) profiles.
Return values: 
<ROHC_RTP>
OFF |
 
 ON
Support of profile 0x0001, ROHC RTP
<ROHC_UDP>
OFF |
 
 ON
Support of profile 0x0002, ROHC UDP
<ROHC_ESP>
OFF |
 
 ON
Support of profile 0x0003, ROHC ESP
<ROHC_IP>
OFF |
 
 ON
Support of profile 0x0004, ROHC IP
<ROHC_TCP>
OFF |
 
 ON
Support of profile 0x0006, ROHC TCP
<ROHCv2_RTP>
OFF |
 
 ON
Support of profile 0x0101, ROHCv2 RTP
<ROHCv2_UDP>
OFF |
 
 ON
Support of profile 0x0102, ROHCv2 UDP
<ROHCv2_ESP>
OFF |
 
 ON
Support of profile 0x0103, ROHCv2 ESP
<ROHCv2_IP>
OFF |
 
 ON
Support of profile 0x0104, ROHCv2 IP
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"ROHC RTP to ROHCv2 IP"
Top