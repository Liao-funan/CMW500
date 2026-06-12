# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEHRChFUFDummies

Module: WCDMA Signaling
Source: 59a2dceeec2545f0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-RGCH and E-HICH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EHRCh:FUFDummies
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EHRCh:FUFDummies 
<Enable>
Enables or disables filling-up the frame with dummies. This feature is only relevant for 10 ms TTI. Here E-RGCH and E-HICH messages for the UE are transmitted in 12 slots per frame. The command defines the behavior in the remaining three slots.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Enable>
OFF |
 
 ON
OFF
: switch off channels (DTX)
ON
: fill-up with dummies, continuous signal
*RST:
OFF
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Fill-Up Frame With Dummies"
Top