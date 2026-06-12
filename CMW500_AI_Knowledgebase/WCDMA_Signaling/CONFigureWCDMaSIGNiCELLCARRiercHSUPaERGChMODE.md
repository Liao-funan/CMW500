# CONFigureWCDMaSIGNiCELLCARRiercHSUPaERGChMODE

Module: WCDMA Signaling
Source: b232cbc4e79f4e3f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-RGCH and E-HICH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:ERGCh:MODE
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:ERGCh:MODE 
<Mode>
Specifies the relative grant sequence transmitted via the E-RGCH.
For definition of a user-defined pattern, see 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
CARRier<c>:
​
HSUPa:
​
ERGCh:
​
PATTern
.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Mode>
ALTernating |
 
 HARQ |
 
 UP |
 
 DOWN |
 
 DTX |
 
 CONTinuous |
 
 SINGle
ALTernating
: alternating UP, DOWN - per TTI
HARQ
: alternating UP, DOWN - per HARQ cycle
UP
: all UP
DOWN
: all DOWN
DTX
: all DTX
CONTinuous
: continuous user-defined pattern
SINGle
: single user-defined pattern
*RST:
ALT
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
V3.2.10: added "HARQ"
V3.2.60: command renamed (
CARRier<c>
 added)
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Mode"
Top