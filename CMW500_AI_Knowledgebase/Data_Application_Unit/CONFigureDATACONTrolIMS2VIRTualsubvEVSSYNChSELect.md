# CONFigureDATACONTrolIMS2VIRTualsubvEVSSYNChSELect

Module: Data Application Unit
Source: c8c3295b136743e8.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:SYNCh:SELect
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:SYNCh:SELect 
<BWRANGE>
Selects a configuration mode for the bandwidth and bit-rate settings of the EVS primary mode.
The uplink (receive) and the downlink (send) can be configured together (
COMMon
) or separately (
SENDrx
).
Suffix: 
<v>
1..20
Parameters:
<BWRANGE>
COMMon |
 
 SENDrx
COMMon
The following commands apply:
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
BWCommon
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
COMMon:
​
BITRate:
​
RANGe
SENDrx
The following commands apply:
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
SEND:
​
BW
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
SEND:
​
BITRate:
​
RANGe
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
RECeive:
​
BW
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
RECeive:
​
BITRate:
​
RANGe
*RST:
COMM
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Select"
Top