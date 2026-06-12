# CONFigureNIOTMEASiRFSettingsENPower

Module: NBIoT Measurements
Source: d6da6846491d47f0.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:NIOT:MEAS<i>:RFSettings:ENPower
CONFigure:NIOT:MEAS<i>:RFSettings:ENPower 
<ExpNomPow>
Sets the expected nominal power of the measured RF signal.
For the combined signal path scenario, use:
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
ENPMode
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
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
V3.5.10
Manual operation: 
See 
"Expected Nominal Power"
Top