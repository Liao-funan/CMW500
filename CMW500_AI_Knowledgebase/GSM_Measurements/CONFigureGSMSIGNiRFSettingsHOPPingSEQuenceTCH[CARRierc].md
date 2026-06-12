# CONFigureGSMSIGNiRFSettingsHOPPingSEQuenceTCH[CARRierc]

Module: GSM Measurements
Source: e04e9a06a555498e.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:HOPPing:SEQuence:TCH[:CARRier<c>]
CONFigure:GSM:SIGN<i>:RFSettings:HOPPing:SEQuence:TCH[:CARRier<c>] 
<Number>(64)
Defines the hopping list. Each entry equals a channel number.
You can specify the 64 entries in any order. The list is sorted automatically from lowest channel number to highest channel number followed by eventual OFF entries.
Suffix: 
<c>
1..2
Selects the carrier to be configured - only relevant in dual carrier mode
Parameters:
<Number>
ON |
 
 OFF
Comma-separated list of 64 list entries (channel numbers)
Range: 
1 to 124, 940 to 1023
*RST:
carrier 1: 1, 62, 124; carrier 2: 2, 63, 123; remaining entries OFF
Additional parameters: OFF | ON (disables | enables the list entry using the previous/default value)
Firmware/Software: 
V2.0.10
Options: 
R&S CMW-KS210
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"Band, Channel / Frequency"
Top