# SENSeWCDMaSIGNiUECapabilityHSUPa

Module: WCDMA Signaling
Source: 0c632cf057b24406.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Signaling Information
 > 
UE Capabilities
 > 
SENSe:WCDMa:SIGN<i>:UECapability:HSUPa?
SENSe:WCDMa:SIGN<i>:UECapability:HSUPa? 
Returns UE capability information related to HSUPA.
Return values: 
<HSUPA>
NO |
 
 YES
Indicates whether the UE supports HSUPA
<PhysLayerCatR6>
E-DCH physical layer category of the UE for release 6 call setup
Range: 
1  to  6
<PhysLayerCatR9>
E-DCH physical layer category of the UE for release 9 call setup
Range: 
8  to  9
<PhysLayerCatR7>
E-DCH physical layer category of the UE for release 7 call setup
Range: 
7  to  7
<PhysLayerCatR11>
E-DCH physical layer category of the UE for release 11 call setup
<ERGCHBICtrl>
NO |
 
 YES
Indicates whether the UE supports common E-RGCH-based interference control in CELL_FACH state
Example: 
See 
"Retrieving Information Provided by the UE (Signaling)"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.2.10: <PhysLayerCat> changed to <PhysLayerCatR6>, added <PhysLayerCatR9>, <PhysLayerCatR7>
V3.7.10: added <PhysLayerCatR11>, <ERGCHBICtrl>
Manual operation: 
See 
"HSUPA"
Top