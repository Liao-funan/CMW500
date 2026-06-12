# CONFigureWCDMaSIGNiDLENHancedSCPichSSCode

Module: WCDMA Signaling
Source: caa1a7942d154737.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
R99 Channels
 > 
CONFigure:WCDMa:SIGN<i>:DL:ENHanced:SCPich:SSCode
CONFigure:WCDMa:SIGN<i>:DL:ENHanced:SCPich:SSCode 
<SecScrambCode>
Defines index k used for calculation of a secondary scrambling code number for the S-CPICH (see also 
"Scrambling Codes"
).
If the secondary scrambling code is deactivated, the primary scrambling code is used (see 
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
SCODe
).
Parameters:
<SecScrambCode>
Range: 
1  to  15
*RST:
1
Additional parameters: OFF | ON (disables | enables the secondary scrambling code)
Example: 
See 
"Configuring Physical Channel DL Settings"
Firmware/Software: 
V1.0.15.0
V2.1.20: *RST value modified and 0 removed from range
Options: 
R&S CMW-KS410
Manual operation: 
See 
"2nd Scrambling Code"
Top