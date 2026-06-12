# CONFigureGSMMEASiRFSettingsENPower

Module: GSM Measurements
Source: 91d7bf4a82104c5e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GSM:MEAS<i>:RFSettings:ENPower
CONFigure:GSM:MEAS<i>:RFSettings:ENPower 
<ExpNomPower>
Sets the expected nominal power of the measured RF signal.
For the combined signal path scenario, use:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
ENPower
Parameters:
<ExpNomPower>
The range of the expected nominal power can be calculated as follows:
Range (Expected Nominal Power) = Range (Input Power) + External Attenuation - User Margin
The input power range is stated in the data sheet.
*RST:
0 dBm
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
V3.0.10: enhanced range
Manual operation: 
See 
"Expected Nominal Power"
Top