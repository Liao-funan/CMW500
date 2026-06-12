# CONFigureWCDMaSIGNiCELLCARRiercHSUPaEAGChPATTernINDex

Module: WCDMA Signaling
Source: 28dea41de9bb4ef8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
E-AGCH Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:INDex
CONFigure:WCDMa:SIGN<i>:CELL:CARRier<c>:HSUPa:EAGCh:PATTern:INDex 
<Index>...
Specifies the absolute grant indices of the absolute grant pattern.
A query returns all eight defined indices. A setting configures the first n indices (n = 1 to 8).
Only the first m indices are considered for transmission, with m specified via 
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
<Index>
Comma-separated list of up to eight values
Range: 
0  to  31
*RST:
10
Additional OFF | ON disables | enables the transmission of index value, OFF results in an unscheduled TTI
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
"AG Index"
Top