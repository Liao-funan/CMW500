# SENSeLTESIGNiUECapabilityRFBCOMbinationVNumberEUTRaBandNrBCLassUL

Module: LTE Signaling
Source: 18375e6679c84981.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
RF UE Capabilities
 > 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:BCLass:UL?
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:BCLass:UL? 
SENSe:LTE:SIGN<i>:UECapability:RF:BCOMbination:V<Number>:EUTRa<BandNr>:BCLass:DL? 
Returns the bandwidth classes supported by the UE in the uplink or downlink. The information is returned for a selected band of all supported carrier aggregation band combinations.
Suffix: 
<Number>
1020
<BandNr>
1..4
Selects for which band of the band combinations the information is returned
Return values: 
<BandwidthClass>
Comma-separated list of strings, one string per band combination (combination 0 to n)
Each string indicates the bandwidth classes supported for the selected band (<BandNr>) of the combination, for example "abc".
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80, V3.5.20 band 3+4
Manual operation: 
See 
"Bandwidth Class..."
Top