# CONFigureWCDMaSIGNiRFSettingsENPMode

Module: WCDMA Signaling
Source: 4b2d270b81a24b64.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:ENPMode
CONFigure:WCDMa:SIGN<i>:RFSettings:ENPMode 
<Mode>
Selects the expected nominal power mode. The expected nominal power of the UL signal can be defined manually or calculated automatically, according to the UL power control settings.
For manual configuration, see:
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
ENPower
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
MARGin
Parameters:
<Mode>
MANual |
 
 ULPC
MANual
: The expected nominal power and margin are specified manually.
ULPC
: The expected nominal power is calculated according to the UL power control settings.
*RST:
ULPC
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"RF Power Uplink > ..."
Top