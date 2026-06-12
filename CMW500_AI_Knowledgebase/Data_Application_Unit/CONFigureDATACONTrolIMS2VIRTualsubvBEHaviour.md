# CONFigureDATACONTrolIMS2VIRTualsubvBEHaviour

Module: Data Application Unit
Source: daff2f9fd7fe4a49.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Virtual Subscriber Settings
 > 
Basic Profile Settings
 > 
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:BEHaviour
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:BEHaviour 
<Behaviour>
Defines the reaction of virtual subscriber number <v> to incoming calls.
Suffix: 
<v>
1..20
Parameters:
<Behaviour>
ANSWer |
 
 NOANswer |
 
 DECLined |
 
 BUSY |
 
 BEFRng |
 
 AFTRng |
 
 CD
ANSWer
: answer the call
NOANswer
: keep "ringing"
DECLined
: reject call
BUSY
: subscriber busy
BEFRng
: call forwarding before ringing
AFTRng
: call forwarding after ringing
CD
: communication deflection
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.10, V3.7.11 added BEFRng / AFTRng / CD
Options: 
R&S CMW-KAA21 for BEFRng, AFTRng, CD
Manual operation: 
See 
"Behavior"
Top