# CONFigureLTEMEASiRFSettingsENPower

Module: LTE Measurements
Source: ee044999cd524cda.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:LTE:MEAS<i>:RFSettings:ENPower
CONFigure:LTE:MEAS<i>:RFSettings:ENPower 
<ExpNomPow>
Sets the expected nominal power of the measured RF signal.
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
ENPMode
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings[:
​
PCC]:
​
ENPower
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings:
​
SCC<c>:
​
ENPMode
CONFigure:
​
LTE:
​
SIGN<i>:
​
RFSettings:
​
SCC<c>:
​
ENPower
Parameters:
<ExpNomPow>
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
V1.0.10.1
V3.0.10: enhanced range
Manual operation: 
See 
"Expected Nominal Power"
Top