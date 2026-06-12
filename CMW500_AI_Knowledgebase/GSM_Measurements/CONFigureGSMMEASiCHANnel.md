# CONFigureGSMMEASiCHANnel

Module: GSM Measurements
Source: e907fa5ce3154f6e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Analyzer Settings
 > 
CONFigure:GSM:MEAS<i>:CHANnel
CONFigure:GSM:MEAS<i>:CHANnel 
<Channel>
Selects the channel number. The channel number must be valid for the current frequency band, for dependencies see 
"GSM Frequency Bands and Channels"
.
The corresponding center frequency (
CONFigure:
​
GSM:
​
MEAS<i>:
​
RFSettings:
​
FREQuency
) is calculated and set.
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
Parameters:
<Channel>
GSM channel number
Range: 
depends on frequency band
*RST:
65
Example: 
See 
"Specifying General Measurement Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Band, Channel / Frequency"
Top