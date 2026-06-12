# CONFigureWLANMEASiRFSettingsUMARgin

Module: WLAN Measurements
Source: fc77e0c3af5541f4.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:UMARgin
CONFigure:WLAN:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine its reference power. The reference power minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Parameters:
<UserMargin>
Range: 
0 dB to (34 dB + external attenuation - expected nominal power)
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"User Margin"
Top