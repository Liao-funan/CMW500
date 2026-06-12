# PREPareGSMSIGNiHANDoverPSWitchedLEVelDLCARRierc

Module: GSM Signaling
Source: 82fc2dda71394faa.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Handover Settings
 > 
Intra-GSM Handover Settings
 > 
PREPare:GSM:SIGN<i>:HANDover:PSWitched:LEVel:DL:CARRier<c>
PREPare:GSM:SIGN<i>:HANDover:PSWitched:LEVel:DL:CARRier<c> 
<Level>(8)
Defines the DL signal level in the destination GSM band in all timeslots relative to the reference level (see 
CONFigure:
​
GSM:
​
SIGN<i>:
​
RFSettings:
​
LEVel:
​
TCH[:
​
CARRier<c>]
. The DL timeslot level can also be set to off level (no signal transmission).
Suffix: 
<c>
1..2
Selects the carrier to be configured - only relevant in dual carrier mode
Parameters:
<Level>
ON |
 
 OFF
List of 8 signal levels for slot 0 to 7
Range: 
-40 dB  to  0 dB
*RST:
OFF, OFF, OFF, 0 dB, OFF, OFF, OFF, OFF
Default unit: 
dB
Additional parameters: OFF | ON (disables | enables DL signal transmission)
Example: 
See 
"Performing an Intra-GSM PS Handover"
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KS210
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"PS: Destination Parameters"
Top