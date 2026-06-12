# CONFigureLTEMEASiRFSettingsMLOFfset

Module: LTE Measurements
Source: 7e43887c77e74a65.htm

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
CONFigure:LTE:MEAS<i>:RFSettings:MLOFfset
CONFigure:LTE:MEAS<i>:RFSettings:MLOFfset 
<MixLevOffset>
Varies the input level of the mixer in the analyzer path.
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
MLOFfset
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
MLOFfset
Parameters:
<MixLevOffset>
Range: 
-10 dB  to  10 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Mixer Level Offset"
Top