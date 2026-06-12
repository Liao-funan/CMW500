# CONFigureWLANMEASiRFSettingsFREQuency

Module: WLAN Measurements
Source: 52874ba0dfcf409d.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:WLAN:MEAS<i>:RFSettings:FREQuency
CONFigure:WLAN:MEAS<i>:RFSettings:FREQuency 
<Frequency>
Configures the center frequency of the RF analyzer. Set it to the center frequency of the received 20-MHz or 40-MHz WLAN channel.
For the combined signal path scenario, use:
CONFigure:
​
WLAN:
​
SIGN<i>:
​
RFSettings:
​
FREQuency
CONFigure:
​
WLAN:
​
SIGN<i>:
​
RFSettings:
​
CHANnel
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<Frequency>
Range: 
70E+6 Hz  to  6E+9 Hz
*RST:
2.412E+9 Hz
Default unit: 
Hz
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.10.1
V3.2.11: Minimum frequency decreased to 70 MHz
Manual operation: 
See 
"Band / Channel / Frequency"
Top