# CONFigureGPRFMEASiRFSettingsFREQuency

Module: GPRF Measurements
Source: ce07e87e11b24ee7.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GPRF:MEAS<i>:RFSettings:FREQuency
CONFigure:GPRF:MEAS<i>:RFSettings:FREQuency 
<AnalyzerFreq>
Selects the center frequency of the RF analyzer.
This command is only relevant for the standalone scenario. For the combined signal path scenario, use the corresponding 
...:SIGN<i>:..
 command.
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<AnalyzerFreq>
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
1.685E+9 Hz
Default unit: 
Hz
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Frequency"
Top