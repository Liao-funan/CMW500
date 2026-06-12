# CONFigureWCDMaSIGNiCELLCARRiercHSUPaERGChPATTern

Module: WCDMA Signaling
Source: 7126ec6471f3461d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-RGCH and E-HICH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:ERGCh:PATTern
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:ERGCh:PATTern 
<Pattern>
Specifies the bits of the user-defined relative grant pattern. Bits exceeding the configured pattern length are ignored, see 
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
PATTern:
​
LENGth
.
Suffix: 
<c>
1..*
Uplink carrier
Parameters:
<Pattern>
String containing exactly 8 bits
0 = DOWN, 1 = UP, - = DTX
*RST:
'00000000'
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
"Pattern Length, Pattern"
Top