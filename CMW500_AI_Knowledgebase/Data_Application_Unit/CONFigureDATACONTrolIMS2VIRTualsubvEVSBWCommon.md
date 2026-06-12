# CONFigureDATACONTrolIMS2VIRTualsubvEVSBWCommon

Module: Data Application Unit
Source: 9a47bdcc204e4bd8.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:BWCommon
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:BWCommon 
<BWCommon>
Selects the codec bandwidths supported in the EVS primary mode.
The setting applies only if the uplink (receive) and the downlink (send) are configured together, see 
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
<BWCommon>
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
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Bandwidth"
Top