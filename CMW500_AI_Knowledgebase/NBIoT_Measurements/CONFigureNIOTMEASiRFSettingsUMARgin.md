# CONFigureNIOTMEASiRFSettingsUMARgin

Module: NBIoT Measurements
Source: 47894c49882744b4.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:NIOT:MEAS<i>:RFSettings:UMARgin
CONFigure:NIOT:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
For the combined signal path scenario, use 
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
UMARgin
.
Parameters:
<UserMargin>
Range: 
0 dB to (55 dB + external attenuation - expected nominal power)
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"User Margin"
Top