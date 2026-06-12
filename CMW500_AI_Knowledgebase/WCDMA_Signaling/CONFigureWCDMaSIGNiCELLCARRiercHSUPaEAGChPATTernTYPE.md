# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEAGChPATTernTYPE

Module: WCDMA Signaling
Source: 6def1756480241ed.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-AGCH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:TYPE
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:TYPE 
<Type>...
Specifies the ID types of the absolute grant pattern.
A query returns all eight defined types. A setting configures the first n types (n = 1 to 8).
Only the first m types are considered for transmission, with m specified via 
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
EAGCh:
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
<Type>
OFF |
 
 ON
Comma-separated list of up to eight values
OFF
: use primary UE-ID
ON
: use secondary UE-ID
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
"ID Type (secondary ID)"
Top