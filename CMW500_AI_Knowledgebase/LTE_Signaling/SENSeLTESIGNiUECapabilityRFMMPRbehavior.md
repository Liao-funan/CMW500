# SENSeLTESIGNiUECapabilityRFMMPRbehavior

Module: LTE Signaling
Source: c2025ddd3a944a48.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:MMPRbehavior?
SENSe:LTE:SIGN<i>:UECapability:RF:MMPRbehavior? 
Returns which MPR/A-MPR behaviors the UE supports.
Return values: 
<Behavior>
String with bits
The leftmost bit refers to behavior 0, the next bit to behavior 1, and so on.
1 means supported. 0 means not supported.
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"modifiedMPR-Behavior"
Top