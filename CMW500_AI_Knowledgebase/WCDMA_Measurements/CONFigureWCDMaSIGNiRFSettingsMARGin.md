# CONFigureWCDMaSIGNiRFSettingsMARGin

Module: WCDMA Measurements
Source: 850414602988459d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:WCDMa:SIGN<i>:RFSettings:MARGin
CONFigure:WCDMa:SIGN<i>:RFSettings:MARGin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine the reference level in manual mode.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Refer also to the following commands:
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
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
CARRier<c>:
​
EATTenuation:
​
INPut
Parameters:
<UserMargin>
Range: 
0 dB to (34 dB + external attenuation - expected nominal power)
*RST:
0 dB
Default unit: 
dB
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"User Margin"
Top