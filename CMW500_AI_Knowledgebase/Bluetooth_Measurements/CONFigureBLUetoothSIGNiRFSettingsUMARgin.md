# CONFigureBLUetoothSIGNiRFSettingsUMARgin

Module: Bluetooth Measurements
Source: f54adce00b304029.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Measurement Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RFSettings:UMARgin
CONFigure:BLUetooth:SIGN<i>:RFSettings:UMARgin 
<Margin>
Sets the margin that the R&S
 
CMW adds to the expected nominal power to determine the reference level.
The reference level minus the external input attenuation must be within the power range of the selected input connector; refer to the data sheet.
Refer also to the following commands:
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
RFSettings:
​
ENPower
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
RFSettings:
​
EATTenuation:
​
INPut
Parameters:
<Margin>
Range: 
0 dB to (55 dB + external attenuation - expected nominal power)
*RST:
0 dB
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"User Margin"
Top