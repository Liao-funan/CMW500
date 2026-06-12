# CONFigureNIOTSIGNiRFSettingsENPMode

Module: NBIoT Signaling
Source: b34af73a0a4b4643.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:NIOT:SIGN<i>:RFSettings:ENPMode
CONFigure:NIOT:SIGN<i>:RFSettings:ENPMode 
<Mode>
Selects the expected nominal power mode. The expected nominal power of the UL signal can be defined manually or calculated automatically, according to the UL power control settings.
For manual configuration, see:
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
ENPower
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
UMARgin
For UL power control settings, see 
"Uplink Power Control"
.
Parameters:
<Mode>
MANual |
 
 ULPC
MANual
The expected nominal power and margin are specified manually.
ULPC
The expected nominal power is calculated according to the UL power control settings. For the margin, 12 dB are applied.
*RST:
ULPC
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Exp. Nominal Power..., Margin"
Top