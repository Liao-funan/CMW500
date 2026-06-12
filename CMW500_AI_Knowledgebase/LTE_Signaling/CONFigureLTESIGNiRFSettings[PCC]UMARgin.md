# CONFigureLTESIGNiRFSettings[PCC]UMARgin

Module: LTE Signaling
Source: 599b2ff6c8bd4449.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UMARgin
CONFigure:LTE:SIGN<i>:RFSettings[:PCC]:UMARgin 
<UserMargin>
CONFigure:LTE:SIGN<i>:RFSettings:SCC<c>:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine the reference level in manual mode. If the expected nominal power is calculated automatically according to the UL power control settings, a fix margin of 12 dB is used instead.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Refer also to the following commands:
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
ENPMode
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
EATTenuation:
​
INPut
Suffix: 
<c>
1..4
Parameters:
<UserMargin>
Range: 
0 dB to (42 dB + external attenuation - expected nominal power)
*RST:
12 dB
Default unit: 
dB
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V1.0.15.21, SCC command V3.5.20
Manual operation: 
See 
"Exp. Nominal Power..., Margin"
Top