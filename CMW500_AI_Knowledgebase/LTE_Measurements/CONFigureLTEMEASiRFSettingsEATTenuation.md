# CONFigureLTEMEASiRFSettingsEATTenuation

Module: LTE Measurements
Source: b9b94621274b443c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Signal Routing
 > 
CONFigure:LTE:MEAS<i>:RFSettings:EATTenuation
CONFigure:LTE:MEAS<i>:RFSettings:EATTenuation 
<RFinputExtAtt>
Defines an external attenuation (or gain, if the value is negative), to be applied to the RF input connector.
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
EATTenuation:
​
INPut
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
EATTenuation:
​
INPut
Parameters:
<RFinputExtAtt>
Range: 
-50 dB  to  90 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"External Attenuation (Input)"
Top