# SENSeLTESIGNiUECapabilityRFBCOMbinationVNumberEUTRaBandNrMCAPabilityUL

Module: LTE Signaling
Source: 3bb2f7729702402d.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:MCAPability:UL?
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:MCAPability:UL? 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:MCAPability:DL? 
Returns the number of layers supported by the UE for spatial multiplexing in the uplink or downlink. The information is returned for a selected band of all supported carrier aggregation band combinations.
Suffix: 
<Number>
1020
<BandNr>
1..4
Selects for which band of the band combinations the information is returned
Return values: 
<MIMOcapability>
Comma-separated list of numbers, 26 numbers per band combination (combination 0 to n)
The 26 numbers indicate the supported number of layers for bandwidth class "a" to "z".
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80, V3.5.20 band 3+4
Manual operation: 
See 
"MIMO Capability..."
Top