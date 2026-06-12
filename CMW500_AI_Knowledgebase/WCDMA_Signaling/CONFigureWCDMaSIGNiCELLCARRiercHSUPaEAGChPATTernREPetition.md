# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEAGChPATTernREPetition

Module: WCDMA Signaling
Source: 49084ee153624e01.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-AGCH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:REPetition
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:REPetition 
<Repetition>
Specifies whether the absolute grant pattern has to be transmitted only once, continuously or serving grant (SG) initialized. Select "SG Initialized" only for E-RGCH measurements.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Repetition>
ONCE |
 
 CONTinuous |
 
 SGINit
*RST:
CONT
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
V3.2.60: command renamed (
CARRier<c>
 added)
V3.5.20: added SGINit
Options: 
R&S CMW-KS401
Manual operation: 
See 
"AG Pattern Repetition"
Top