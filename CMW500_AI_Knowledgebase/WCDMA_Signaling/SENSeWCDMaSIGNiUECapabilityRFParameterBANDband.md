# SENSeWCDMaSIGNiUECapabilityRFParameterBANDband

Module: WCDMA Signaling
Source: ce8c1a9eefa04001.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter:BAND<band>?
SENSe:WCDMa:SIGN<i>:UECapability:RFParameter:BAND<band>? 
Queries the UE capabilities for the selected band related to non-contiguous multi-cell operation.
Suffix: 
<band>
1..*
Operating band
Return values: 
<Supported>
NO |
 
 YES
Support of non-contiguous multi-cell operation
<PowerClass>
The UE power class
<AddSecCells>
Number of additional secondary serving cells supported by the UE. The absence of this IE means that the UE does not support multi-cell operation on three or four cells.
<ULOLTD>
NO |
 
 YES
Support of uplink open loop transmit diversity
<NC2C>
NO |
 
 YES
Support of non-contiguous multi-cell operation on two cells
<NC3C>
NO |
 
 YES
Support of non-contiguous multi-cell operation on three cells
<NC4C>
NO |
 
 YES
Support of non-contiguous multi-cell operation on four cells
<ULCLTD>
NO |
 
 YES
Support of uplink closed loop transmit diversity in CELL_DCH
<ULMIMO>
NO |
 
 YES
Support of uplink MIMO in CELL_DCH
<MIMO4x4Mode>
NO |
 
 YES
Support of MIMO mode with four transmit antennas in CELL_DCH
<FreqSpecCMNCOp>
NO |
 
 YES
Support of frequency-specific compressed mode for intra-band non-contiguous operation
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.70
V3.7.10: added <ULCLTD>, <ULMIMO>, <MIMO4x4Mode>, <FreqSpecCMNCOp>
Manual operation: 
See 
"RF Parameters"
Top