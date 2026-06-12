# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEAGChPATTernSCOPe

Module: WCDMA Signaling
Source: 5ddb823deac0456a.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-AGCH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:SCOPe
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:SCOPe 
<Scope>...
Specifies the absolute grant scopes of the absolute grant pattern.
A query returns all eight defined scopes. A setting configures the first n scopes (n = 1 to 8).
Only the first m scopes are considered for transmission, with m specified via 
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
<Scope>
OFF |
 
 ON
Comma-separated list of up to eight values
OFF
: absolute grant applies to all HARQ processes
ON
: absolute grant applies to one HARQ process only
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
"AG Scope (per HARQ process)"
Top