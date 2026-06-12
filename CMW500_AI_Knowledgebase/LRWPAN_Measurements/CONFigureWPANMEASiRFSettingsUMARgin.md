# CONFigureWPANMEASiRFSettingsUMARgin

Module: LRWPAN Measurements
Source: a69222e45f4f4140.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WPAN:MEAS<i>:RFSettings:UMARgin
CONFigure:WPAN:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power in order to determine the reference level.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Parameters:
<UserMargin>
Range: 
0 dB to (90 dB + External Attenuation - Expected Nominal Power)
*RST:
0 dB
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"User Margin"
Top