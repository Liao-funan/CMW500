# CONFigureLTESIGNiRFSettings[PCC]ENPMode

Module: LTE Signaling
Source: e152963be2a94869.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:ENPMode
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:ENPMode 
<Mode>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:ENPMode 
<Mode>
Selects the expected nominal power mode. The expected nominal power of the UL signal can be defined manually or calculated automatically, according to the UL power control settings.
For manual configuration, see:
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
ENPower
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
UMARgin
For UL power control settings, see 
"Uplink Power Control"
.
Suffix: 
<c>
1..4
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
V1.0.15.21, SCC command V3.5.20
Manual operation: 
See 
"Exp. Nominal Power..., Margin"
Top