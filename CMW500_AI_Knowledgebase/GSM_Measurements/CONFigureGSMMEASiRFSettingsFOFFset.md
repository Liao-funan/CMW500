# CONFigureGSMMEASiRFSettingsFOFFset

Module: GSM Measurements
Source: fd18c0d55bf54a17.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GSM:MEAS<i>:RFSettings:FOFFset
CONFigure:GSM:MEAS<i>:RFSettings:FOFFset 
<Offset>
Specifies a positive or negative frequency offset to be added to the center frequency of the configured channel.
For the combined signal path scenario, use:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
FOFFset:
​
UL
CONFigure:
​
GSM:
​
SIGN<i>:
​
CONNection:
​
RFOFfset
Parameters:
<Offset>
Range: 
-100000 Hz to 100000 Hz
*RST:
0 Hz
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Frequency Offset"
Top