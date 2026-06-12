# CONFigureWPANMEASiRFSettingsENPower

Module: LRWPAN Measurements
Source: 74739485f6164281.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WPAN:MEAS<i>:RFSettings:ENPower
CONFigure:WPAN:MEAS<i>:RFSettings:ENPower 
<ExpNomPwr>
Sets the expected nominal power of the measured RF signal.
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
V3.5.10
Manual operation: 
See 
"Expected Nominal Power"
Top