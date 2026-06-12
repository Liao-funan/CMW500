# SENSeWCDMaSIGNiUECapabilityRFParameterBANDbandNCcell

Module: WCDMA Signaling
Source: a620b1ac9dc24145.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter:BAND<band>:NC<cell>?
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter:BAND<band>:NC<cell>? 
Queries the UE capabilities related to non-contiguous multi-cell operation.
Suffix: 
<band>
1..*
Operating band
<cell>
2..4
The maximum number of non-contiguous cells
Return values: 
<Supported>
NO |
 
 YES
Indicates if the UE supports non-contiguous multi-cell operation for the selected <band>/<cell> combination
<GAPSize>
M5 |
 
 M10 |
 
 ANY
The maximum gap size between the aggregated cells supported by the UE
M5
: 5 MHz
M10
: 10 MHz
ANY
: any multiple of 5 MHz
<NCComb22>
NO |
 
 YES
Indicates if the UE supports an equal number of contiguous cells on each side of the gap
<NCComb1331>
NO |
 
 YES
Indicates if the UE supports a different number of contiguous cells on each side of the gap
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"RF Parameters"
Top