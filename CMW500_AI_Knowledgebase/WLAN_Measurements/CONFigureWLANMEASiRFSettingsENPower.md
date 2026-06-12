# CONFigureWLANMEASiRFSettingsENPower

Module: WLAN Measurements
Source: e442d73b0d784514.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:ENPower
CONFigure:WLAN:MEAS<i>:RFSettings:ENPower 
<ExpNomPwr>
Sets the expected nominal power of the measured RF signal.
For the combined signal path scenario, use 
CONFigure:
​
WLAN:
​
SIGN<i>:
​
RFSettings:
​
EPEPower
.
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
V1.0.10.1
Manual operation: 
See 
"Expected Nominal Power"
Top