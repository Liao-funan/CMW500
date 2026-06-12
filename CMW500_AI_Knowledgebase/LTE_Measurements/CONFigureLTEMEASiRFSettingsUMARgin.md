# CONFigureLTEMEASiRFSettingsUMARgin

Module: LTE Measurements
Source: 489dbb38e71e4c60.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:LTE:MEAS<i>:RFSettings:UMARgin
CONFigure:LTE:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
For the combined signal path scenario, use:
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
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings:
​
SCC<c>:
​
UMARgin
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
V1.0.10.1
V3.0.10: enhanced range
Manual operation: 
See 
"User Margin"
Top