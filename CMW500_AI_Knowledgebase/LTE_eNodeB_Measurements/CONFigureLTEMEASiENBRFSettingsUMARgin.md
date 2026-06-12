# CONFigureLTEMEASiENBRFSettingsUMARgin

Module: LTE eNodeB Measurements
Source: 44d9da9c23f242b5.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:LTE:MEAS<i>:ENB:RFSettings:UMARgin
CONFigure:LTE:MEAS<i>:ENB:RFSettings:UMARgin 
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
V3.0.20
V3.2.20: enhanced range
Top