# SENSeLTESIGNiUECapabilityRFBCOMbinationVNumberBCSet

Module: LTE Signaling
Source: c042920e89854ae6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:BCSet?
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:BCSet? 
Returns a list of binary numbers, indicating which bandwidth combination sets the UE supports for the individual carrier aggregation band combinations.
Suffix: 
<Number>
1020
Return values: 
<Band>
Comma-separated list of binary numbers, one binary number per band combination (combination 0 to n)
Each binary number indicates which bandwidth combination sets are supported for the band combination. The leftmost bit corresponds to set 0, the next bit to set 1, and so on. "0" means not supported. "1" means supported.
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"Band Combinations vs Parameter"
Top