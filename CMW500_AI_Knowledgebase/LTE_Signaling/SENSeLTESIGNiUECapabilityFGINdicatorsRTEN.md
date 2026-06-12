# SENSeLTESIGNiUECapabilityFGINdicatorsRTEN

Module: LTE Signaling
Source: 7f36e706ee5445a4.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Capabilities
 > 
General UE Capability Information
 > 
SENSe:LTE:SIGN<i>:UECapability:FGINdicators:RTEN?
SENSe:LTE:SIGN<i>:UECapability:FGINdicators:RTEN? 
SENSe:LTE:SIGN<i>:UECapability:FAUeeutra:FGINdicators:RTEN? 
SENSe:LTE:SIGN<i>:UECapability:TAUeeutra:FGINdicators:RTEN? 
Returns the "featureGroupIndRel10-r10" contained in the UE capability information.
The 32-bit value contains one bit per feature group (1 = supported, 0 = not supported).
Return values: 
<FeatureGroupInd>
Range: 
#B0  to  #B11111111111111111111111111111111
Example: 
See 
"Querying UE Capability Report Contents"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"Feature Group Indicators Rel 10"
Top