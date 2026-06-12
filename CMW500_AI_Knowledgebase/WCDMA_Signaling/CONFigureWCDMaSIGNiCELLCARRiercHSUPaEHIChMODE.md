# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEHIChMODE

Module: WCDMA Signaling
Source: 5783897bddd84e24.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-RGCH and E-HICH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EHICh:MODE
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EHICh:MODE 
<Mode>
Specifies the HARQ acknowledgement indicator sequence transmitted via the E-HICH.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Mode>
CRC |
 
 ALTernating |
 
 ACK |
 
 NACK |
 
 DTX
CRC
: react on UL CRC (ACK, NACK or DTX)
ALTernating
: alternating ACK, NACK
ACK
: all ACK
NACK
: all NACK
DTX
: all DTX
*RST:
CRC
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
"Mode"
Top