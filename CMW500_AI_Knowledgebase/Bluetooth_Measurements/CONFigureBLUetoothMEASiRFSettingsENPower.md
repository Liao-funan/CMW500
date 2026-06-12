# CONFigureBLUetoothMEASiRFSettingsENPower

Module: Bluetooth Measurements
Source: 5af0cf5af6d74525.htm

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
CONFigure:BLUetooth:MEAS<i>:RFSettings:ENPower
CONFigure:BLUetooth:MEAS<i>:RFSettings:ENPower 
<ExpNomPwr>
Sets the expected nominal power of the measured RF signal.
For the combined signal path scenario, use 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
RFSettings:
​
ENPower
.
Parameters:
<ExpNomPwr>
The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Expected Nominal Power, Auto Ranging"
Top