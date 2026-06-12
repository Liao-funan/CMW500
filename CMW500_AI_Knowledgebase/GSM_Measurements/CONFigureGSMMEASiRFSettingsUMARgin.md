# CONFigureGSMMEASiRFSettingsUMARgin

Module: GSM Measurements
Source: aea4ad0ebe9840be.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GSM:MEAS<i>:RFSettings:UMARgin
CONFigure:GSM:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
For the combined signal path scenario, use
CONFigure:
​
GSM:
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
0 dB to (55 dB + External Attenuation - Expected Nominal Power)
*RST:
0 dB
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
V3.0.10: enhanced range
Manual operation: 
See 
"User Margin"
Top