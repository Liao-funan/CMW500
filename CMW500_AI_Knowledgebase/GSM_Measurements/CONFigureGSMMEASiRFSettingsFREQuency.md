# CONFigureGSMMEASiRFSettingsFREQuency

Module: GSM Measurements
Source: a794f140c7fd4026.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GSM:MEAS<i>:RFSettings:FREQuency
CONFigure:GSM:MEAS<i>:RFSettings:FREQuency 
<Frequency>
Selects the center frequency of the RF analyzer.
If the center frequency is valid for the current frequency band, the corresponding channel number is also calculated and set.
See also:
"GSM Frequency Bands and Channels"
CONFigure:
​
GSM:
​
MEAS<i>:
​
BAND
CONFigure:
​
GSM:
​
MEAS<i>:
​
CHANnel
For the combined signal path scenario, use:
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
CHANnel:
​
TCH[:
​
CARRier<c>]
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
CHCCombined:
​
TCH:
​
CSWitched
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
HOPPing:
​
ENABle:
​
TCH[:
​
CARRier<c>]
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
HOPPing:
​
MAIO:
​
TCH[:
​
CARRier<c>]
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
HOPPing:
​
HSN:
​
TCH[:
​
CARRier<c>]
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
HOPPing:
​
SEQuence:
​
TCH[:
​
CARRier<c>]
The supported frequency range depends on the instrument model and the available options. The supported range can be smaller than stated here. Refer to the preface of your model-specific base unit manual.
Parameters:
<Frequency>
Range: 
70E+6 Hz to 6E+9 Hz
*RST:
903E+6 Hz
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Band, Channel / Frequency"
Top