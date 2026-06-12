# CONFigureGSMSIGNiBERPSWitchedSCONdition

Module: GSM Signaling
Source: db64fc10a8e74eef.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER PS Measurement
 > 
General BER PS Settings
 > 
CONFigure:GSM:SIGN<i>:BER:PSWitched:SCONdition
CONFigure:GSM:SIGN<i>:BER:PSWitched:SCONdition 
<Condition>
Qualifies whether the measurement is stopped after a failed limit check or continued. When the measurement is stopped, it reaches the 
RDY
 state.
Parameters:
<Condition>
NONE |
 
 FLIMit
NONE
: Continue measurement irrespective of the limit check
FLIMit
: Stop measurement on first limit failure
*RST:
FLIM
Example: 
See 
"BER PS Tests"
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"Stop Condition"
Top