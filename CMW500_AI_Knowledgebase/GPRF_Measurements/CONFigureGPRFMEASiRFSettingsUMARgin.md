# CONFigureGPRFMEASiRFSettingsUMARgin

Module: GPRF Measurements
Source: c0bb5d52d898474a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GPRF:MEAS<i>:RFSettings:UMARgin
CONFigure:GPRF:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
Parameters:
<UserMargin>
Range: 
0 dB to (55 dB + External Attenuation - Expected Nominal Power)
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"User Margin"
Top