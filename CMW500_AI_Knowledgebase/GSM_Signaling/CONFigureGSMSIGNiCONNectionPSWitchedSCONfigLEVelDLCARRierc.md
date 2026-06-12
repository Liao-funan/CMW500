# CONFigureGSMSIGNiCONNectionPSWitchedSCONfigLEVelDLCARRierc

Module: GSM Signaling
Source: e510722eed2f4d9f.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Slot Configuration and Resulting Throughput
 > 
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:LEVel:DL:CARRier<c>
CONFigure:GSM:SIGN<i>:CONNection:PSWitched:SCONfig:LEVel:DL:CARRier<c> 
<Level>(8)
Defines the DL signal level in all timeslots relative to the reference level (see 
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
"Configuring PS Connection Settings"
Firmware/Software: 
V2.0.20
Options: 
R&S CMW-KS210
R&S CMW-KS201 for carrier 2
Manual operation: 
See 
"Level"
Top