# SENSeLTESIGNiUECapabilityPLAYerNURClist

Module: LTE Signaling
Source: 218f0bf8145e46d5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
Physical Layer UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:PLAYer:NURClist?
SENSe:LTE:SIGN<i>:UECapability:PLAYer:NURClist? 
SENSe:LTE:SIGN<i>:UECapability:FAUeeutra:PLAYer:NURClist? 
SENSe:LTE:SIGN<i>:UECapability:TAUeeutra:PLAYer:NURClist? 
Returns a list of values, indicating whether the UE supports non-contiguous UL resource allocations within a CC for the individual E-UTRA operating bands.
Return values: 
<SupportedBand>
OFF |
 
 ON
256 values: user-defined band, band 1 to band 255
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80
V3.5.40: result array restructured
Manual operation: 
See 
"non Contiguous UL RA within CC List Supported"
Top