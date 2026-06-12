# CONFigureBLUetoothMEASiRFSettingsUMARgin

Module: Bluetooth Measurements
Source: 263b737fb94e4d01.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:BLUetooth:MEAS<i>:RFSettings:UMARgin
CONFigure:BLUetooth:MEAS<i>:RFSettings:UMARgin 
<UserMargin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine the reference level.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
For the combined signal path scenario, use 
CONFigure:
​
BLUetooth:
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
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"User Margin"
Top