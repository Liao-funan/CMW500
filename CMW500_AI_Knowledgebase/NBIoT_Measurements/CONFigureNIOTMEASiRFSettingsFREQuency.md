# CONFigureNIOTMEASiRFSettingsFREQuency

Module: NBIoT Measurements
Source: fe4ad719fb4a436c.htm

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
CONFigure:NIOT:MEAS<i>:RFSettings:FREQuency
CONFigure:NIOT:MEAS<i>:RFSettings:FREQuency 
<AnalyzerFreq>
Selects the center frequency of the RF analyzer.
Using the unit CH, the frequency can be set via the channel number. The allowed channel number range depends on the operating band, see 
"Frequency Bands"
.
For the combined signal path scenario, use 
CONFigure:
​
NIOT:
​
SIGN<i>:
​
RFSettings:
​
CHANnel:
​
UL
.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<AnalyzerFreq>
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
1.95E+9 Hz
Default unit: 
Hz
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Band / Channel / Frequency"
Top