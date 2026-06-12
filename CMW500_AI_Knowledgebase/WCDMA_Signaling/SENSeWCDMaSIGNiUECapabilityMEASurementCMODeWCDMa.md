# SENSeWCDMaSIGNiUECapabilityMEASurementCMODeWCDMa

Module: WCDMA Signaling
Source: d1b98285de0741db.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:MEASurement:CMODe:WCDMa?
SENSe:WCDMa:SIGN<i>:UECapability:MEASurement:CMODe:WCDMa? 
<Band>
SENSe:WCDMa:SIGN<i>:UECapability:MEASurement:CMODe:WCDMa:MCARrier? 
<Band>
Returns the UE capabilities for WCDMA and WCDMA multicarrier neighbor cell measurements-related compressed mode.
Query parameters: 
<Band>
OB1 |
 
 OB2 |
 
 OB3 |
 
 OB4 |
 
 OB5 |
 
 OB6 |
 
 OB7 |
 
 OB8 |
 
 OB9 |
 
 OB10 |
 
 OB11 |
 
 OB12 |
 
 OB13 |
 
 OB14 |
 
 OB15 |
 
 OB16 |
 
 OB17 |
 
 OB18 |
 
 OB19 |
 
 OB20 |
 
 OB21 |
 
 OB22 |
 
 OB25 |
 
 OB26 |
 
 OB32
OB1
, ..., 
OB22
: WCDMA operating band I to XXII
OB25
, 
OB26
, 
OB32
: WCDMA operating band XXV, XXVI and XXXII
Return values: 
<CompressedMode>
NN |
 
 NY |
 
 YN |
 
 YY
NN
: compressed mode for the neighbor cell measurement not required (UL and DL)
NY
: compressed mode for the neighbor cell measurement required in DL only
YN
: compressed mode for the neighbor cell measurement required in UL only
YY
: compressed mode for the neighbor cell measurement required in UL and DL
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"WCDMA DL/UL CM Required"
V3.2.70: added OB25, OB26
V3.5.30: added OB32
Top