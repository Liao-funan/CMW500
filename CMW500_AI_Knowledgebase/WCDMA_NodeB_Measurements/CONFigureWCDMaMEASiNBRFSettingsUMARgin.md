# CONFigureWCDMaMEASiNBRFSettingsUMARgin

Module: WCDMA NodeB Measurements
Source: 4ec886d0b5804a0c.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WCDMa:MEAS<i>:NB:RFSettings:UMARgin
CONFigure:WCDMa:MEAS<i>:NB:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
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
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"User Margin"
Top