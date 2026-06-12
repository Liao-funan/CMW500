# CONFigureLTEMEASiRFSettingsFOFFset

Module: LTE Measurements
Source: 264e1e9e25774aa5.htm

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
CONFigure:LTE:MEAS<i>:RFSettings:FOFFset
CONFigure:LTE:MEAS<i>:RFSettings:FOFFset 
<Offset>
Specifies a positive or negative frequency offset to be added to the carrier center frequency (
CONFigure:
​
LTE:
​
MEAS<i>:
​
RFSettings:
​
CC<no>:
​
FREQuency
).
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
FOFFset:
​
UL
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
FOFFset:
​
UL
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
FOFFset:
​
UL:
​
UCSPecific
Parameters:
<Offset>
Range: 
-100E+3 Hz  to  100E+3 Hz
*RST:
0 Hz
Default unit: 
Hz
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Frequency Offset"
Top