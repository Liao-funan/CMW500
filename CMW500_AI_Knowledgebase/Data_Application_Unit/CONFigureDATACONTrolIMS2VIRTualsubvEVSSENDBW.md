# CONFigureDATACONTrolIMS2VIRTualsubvEVSSENDBW

Module: Data Application Unit
Source: 497e1d76b05e46d0.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:SEND:BW
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:SEND:BW 
<SENDBW>
Selects the codec bandwidths supported in the EVS primary mode in the downlink (send) direction.
The setting applies only if the uplink and the downlink are configured separately, see 
CONFigure:
​
DATA:
​
CONTrol:
​
IMS2:
​
VIRTualsub<v>:
​
EVS:
​
SYNCh:
​
SELect
.
Suffix: 
<v>
1..20
Parameters:
<SENDBW>
NB |
 
 WB |
 
 SWB |
 
 FB |
 
 NBWB |
 
 NBSWb |
 
 NBFB
NB
: narrowband only
WB
: wideband only
SWB
: super wideband only
FB
: fullband only
NBWB
: narrowband and wideband
NBSWb
: narrowband, wideband and super wideband
NBFB
: narrowband, wideband, super wideband and fullband
*RST:
NB
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Bandwidth"
Top