# CONFigureGSMSIGNiBERCSWitchedSCONdition

Module: GSM Signaling
Source: 923da5c5531b4d01.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER CS Measurement
 > 
General BER CS Settings
 > 
CONFigure:GSM:SIGN<i>:BER:CSWitched:SCONdition
CONFigure:GSM:SIGN<i>:BER:CSWitched:SCONdition 
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
"Measuring in Burst by Burst Mode"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"Stop Condition"
Top