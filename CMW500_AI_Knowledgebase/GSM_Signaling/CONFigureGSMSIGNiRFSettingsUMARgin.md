# CONFigureGSMSIGNiRFSettingsUMARgin

Module: GSM Signaling
Source: fc81aaa9cf144b15.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Routing Settings
 > 
Signal Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:UMARgin
CONFigure:GSM:SIGN<i>:RFSettings:UMARgin 
<Margin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine the reference level in manual mode. If the expected nominal power is calculated automatically according to the UL power control settings, a fix margin of 6 dB is used instead.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Refer also to the following commands:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
ENPower
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
EATTenuation:
​
INPut
Parameters:
<Margin>
Range: 
0 dB to (55 dB + external attenuation - expected nominal power)
*RST:
6 dB
Default unit: 
dB
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Exp. Nominal Power, Margin"
Top