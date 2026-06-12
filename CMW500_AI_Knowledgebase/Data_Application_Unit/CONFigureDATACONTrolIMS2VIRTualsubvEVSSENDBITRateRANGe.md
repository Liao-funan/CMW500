# CONFigureDATACONTrolIMS2VIRTualsubvEVSSENDBITRateRANGe

Module: Data Application Unit
Source: b3759555347a41a4.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:SEND:BITRate:RANGe
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:SEND:BITRate:RANGe 
<BitrateLower>, <BitrateHigher>
Selects the bit-rate range supported in the EVS primary mode in the downlink (send) direction. The value must be compatible to the selected bandwidth.
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
<BitrateLower>
R59 |
 
 R72 |
 
 R80 |
 
 R96 |
 
 R132 |
 
 R164 |
 
 R244 |
 
 R320 |
 
 R480 |
 
 R640 |
 
 R960 |
 
 R1280
Lower end of the range, 5.9 kbit/s to 128 kbit/s
*RST:
R59
<BitrateHigher>
R59 |
 
 R72 |
 
 R80 |
 
 R96 |
 
 R132 |
 
 R164 |
 
 R244 |
 
 R320 |
 
 R480 |
 
 R640 |
 
 R960 |
 
 R1280
Upper end of the range, 5.9 kbit/s to 128 kbit/s
*RST:
R244
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Bit Rate"
Top