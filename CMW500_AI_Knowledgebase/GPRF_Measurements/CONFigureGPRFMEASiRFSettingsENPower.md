# CONFigureGPRFMEASiRFSettingsENPower

Module: GPRF Measurements
Source: 099ea42fb04448f2.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GPRF:MEAS<i>:RFSettings:ENPower
CONFigure:GPRF:MEAS<i>:RFSettings:ENPower 
<ExpNomPwr>
Sets the expected nominal power of the measured RF signal.
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
Parameters:
<ExpNomPwr>
The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Default unit: 
dBm
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Expected Nominal Power"
Top