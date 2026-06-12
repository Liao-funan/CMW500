# CONFigureNIOTSIGNiRFSettingsUMARgin

Module: NBIoT Measurements
Source: 2d945507590d4306.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:NIOT:SIGN<i>:RFSettings:UMARgin
CONFigure:NIOT:SIGN<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine the reference level in manual mode. If the expected nominal power is calculated automatically according to the UL power control settings, a fix margin of 12 dB is used instead.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Refer also to the following commands:
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
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
EATTenuation:
​
INPut
Parameters:
<UserMargin>
Range: 
0 dB to (55 dB + external attenuation - expected nominal power)
*RST:
12 dB
Default unit: 
dB
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"User Margin"
Top