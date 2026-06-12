# CONFigureLTEMEASiRFSettingsCCnoFREQuency

Module: LTE Measurements
Source: 4ec47204e2594830.htm

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
CONFigure:LTE:MEAS<i>:RFSettings:CC<no>:FREQuency
CONFigure:LTE:MEAS<i>:RFSettings:CC<no>:FREQuency 
<AnalyzerFreq>
Selects the center frequency of component carrier CC<no>. Without carrier aggregation, you can omit <no>.
Using the unit CH, the frequency can be set via the channel number. The allowed channel number range depends on the operating band, see 
"Frequency Bands"
.
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
CHANnel:
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
CHANnel:
​
UL
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Suffix: 
<no>
1..3
Parameters:
<AnalyzerFreq>
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
Depends on <no>
Default unit: 
Hz
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Band / Channel / Frequency"
Top