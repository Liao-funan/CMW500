# SENSeLTESIGNiUECapabilityRFBCOMbinationVNumberEUTRaBandNrSCPRoc

Module: LTE Signaling
Source: 3cb657a14c3b49e3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:SCPRoc?
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:SCPRoc? 
Returns the maximum number of CSI processes supported by the UE. The information is returned for a selected band of all supported carrier aggregation band combinations.
Suffix: 
<Number>
1020
<BandNr>
1..4
Selects for which band of the band combinations the information is returned
Return values: 
<Proc>
N1 |
 
 N3 |
 
 N4
Comma-separated list of values, one value per band combination (combination 0 to n)
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Supported CSI-Proc"
Top