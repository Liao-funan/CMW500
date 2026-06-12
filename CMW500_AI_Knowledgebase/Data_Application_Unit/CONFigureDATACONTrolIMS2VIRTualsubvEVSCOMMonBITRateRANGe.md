# CONFigureDATACONTrolIMS2VIRTualsubvEVSCOMMonBITRateRANGe

Module: Data Application Unit
Source: 6f82e93a17134a35.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:COMMon:BITRate:RANGe
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:EVS:COMMon:BITRate:RANGe 
<BitrateLower>, <BitrateHigher>
Selects the bit-rate range supported in the EVS primary mode. The value must be compatible to the selected bandwidth.
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
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Bit Rate"
Top