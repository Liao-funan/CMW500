# SENSeLTESIGNiUECapabilityRFRBANds

Module: LTE Signaling
Source: cc39ee1585fa45be.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:RBANds?
SENSe:LTE:SIGN<i>:UECapability:RF:RBANds? 
Returns all frequency bands requested by E-UTRAN.
Return values: 
<RequestedBands>
UDEFined |
 
 OB1 |
 
 ... |
 
 OB45 |
 
 OB46 |
 
 OB48 |
 
 OB65 |
 
 ... |
 
 OB71 |
 
 OB250 |
 
 OB252 |
 
 OB255
Comma-separated list of 64 values
Typically, fewer than 64 bands are requested and the remaining values are filled with NAV.
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"Requested Frequency Bands"
Top