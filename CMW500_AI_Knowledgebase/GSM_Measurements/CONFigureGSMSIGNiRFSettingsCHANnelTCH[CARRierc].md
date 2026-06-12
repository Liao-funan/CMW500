# CONFigureGSMSIGNiRFSettingsCHANnelTCH[CARRierc]

Module: GSM Measurements
Source: 1b59f4e5a85f4fb1.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement Settings
 > 
CONFigure:GSM:SIGN<i>:RFSettings:CHANnel:TCH[:CARRier<c>]
CONFigure:GSM:SIGN<i>:RFSettings:CHANnel:TCH[:CARRier<c>] 
<Channel>
Sets the GSM channel number for the traffic channel (TCH) for circuit switched connections and the packet data channel (PDCH) for packet switched connections.
Suffix: 
<c>
1..2
Selects the carrier to be configured - only relevant in dual carrier mode
Parameters:
<Channel>
The default values are for GSM 900.
Range: 
1 to 124, 940 to 1023
*RST:
62 for carrier 1, 72 for carrier 2
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"Band, Channel / Frequency"
Top