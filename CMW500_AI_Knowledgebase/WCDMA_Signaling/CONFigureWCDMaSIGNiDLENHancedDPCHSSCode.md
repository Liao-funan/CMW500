# CONFigureWCDMaSIGNiDLENHancedDPCHSSCode

Module: WCDMA Signaling
Source: e092ff18dc994e9f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Physical Channel Downlink Settings
 > 
DPCH / F-DPCH Configuration
 > 
CONFigure:WCDMa:SIGN<i>:DL:ENHanced:DPCH:SSCode
CONFigure:WCDMa:SIGN<i>:DL:ENHanced:DPCH:SSCode 
<SecScrambCode>
Defines index k used for calculation of a secondary scrambling code number for the DPCH/F-DPCH (see also 
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
Manual operation: 
See 
"2nd Scrambling Code"
Top