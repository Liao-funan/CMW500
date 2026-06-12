# CONFigureWCDMaMEASiNBRFSettingsENPower

Module: WCDMA NodeB Measurements
Source: 24c2458407f74bfc.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WCDMa:MEAS<i>:NB:RFSettings:ENPower
CONFigure:WCDMa:MEAS<i>:NB:RFSettings:ENPower 
<ExpNomPower>
Sets the expected nominal power of the measured RF signal.
Parameters:
<ExpNomPower>
The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Expected Nominal Power"
Top