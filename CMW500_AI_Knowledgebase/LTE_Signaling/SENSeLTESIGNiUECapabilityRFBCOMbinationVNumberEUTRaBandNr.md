# SENSeLTESIGNiUECapabilityRFBCOMbinationVNumberEUTRaBandNr

Module: LTE Signaling
Source: 1949f89846a74a05.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>?
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>? 
Returns the operating band combinations supported for carrier aggregation.
Suffix: 
<Number>
1020, 1090
Selects the UE capability report element to be evaluated:
RF-Parameters-v1020
 or 
RF-Parameters-v1090
<BandNr>
1..4
Selects which band of the band combinations is returned
Return values: 
<Band>
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
Comma-separated list of bands, one band per band combination (combination 0 to n)
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80, some bands added in later versions
V3.5.20: band no 3+4
Manual operation: 
See 
"Band Combinations vs Parameter"
Top