# CONFigureWCDMaMEASiRFSettingsUMARgin

Module: WCDMA Measurements
Source: 6a1a3bdd1f1642f2.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WCDMa:MEAS<i>:RFSettings:UMARgin
CONFigure:WCDMa:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
For the combined signal path scenario, use
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
RFSettings:
​
MARGin
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
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
V3.0.10: enhanced range
Manual operation: 
See 
"User Margin"
Top