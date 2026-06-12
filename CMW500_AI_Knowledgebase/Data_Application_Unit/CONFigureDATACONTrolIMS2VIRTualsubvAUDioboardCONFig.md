# CONFigureDATACONTrolIMS2VIRTualsubvAUDioboardCONFig

Module: Data Application Unit
Source: 40b5aaacb94849d5.htm

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
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:AUDioboard:CONFig
CONFigure:DATA:CONTrol:IMS2:VIRTualsub<v>:AUDioboard:CONFig 
<Instance>, <DTXEnable>, <ForceModeNB>, <ForceModeWB>, <ForceModeEVS>
Configures the audio board.
A query returns only the values that are relevant for the active codec:
NB AMR: 
<Instance>, <DTXEnable>, <ForceModeNB>
WB AMR: 
<Instance>, <DTXEnable>, <ForceModeWB>
EVS: 
<Instance>, <ForceModeEVS>
Suffix: 
<v>
1..20
Parameters:
<Instance>
INST1 |
 
 INST2
Audio software instance 1 or 2
*RST:
INST1
<DTXEnable>
OFF |
 
 ON
Enable comfort noise in the downlink for AMR codecs
*RST:
OFF
<ForceModeNB>
ZERO |
 
 ONE |
 
 TWO |
 
 THRE |
 
 FOUR |
 
 FIVE |
 
 SIX |
 
 SEVN |
 
 FREE
Index of the codec rate to be used if the AMR narrowband codec is active
FREE means that no specific codec rate is forced
*RST:
FREE
<ForceModeWB>
ZERO |
 
 ONE |
 
 TWO |
 
 THRE |
 
 FOUR |
 
 FIVE |
 
 SIX |
 
 SEVN |
 
 EIGH |
 
 FREE
Index of the codec rate to be used if the AMR wideband codec is active
FREE means that no specific codec rate is forced
*RST:
FREE
<ForceModeEVS>
SDP |
 
 P28 |
 
 P72 |
 
 P80 |
 
 P96 |
 
 P132 |
 
 P164 |
 
 P244 |
 
 P320 |
 
 P480 |
 
 P640 |
 
 P960 |
 
 P1280 |
 
 A660 |
 
 A885 |
 
 A1265 |
 
 A1425 |
 
 A1585 |
 
 A1825 |
 
 A1985 |
 
 A2305 |
 
 A2385
Start mode and rate to be used if the EVS codec is active
SDP
: no specific codec rate forced
P28 to P1280
: EVS primary mode, 2.8 kbit/s to 128 kbit/s
A660 to A2385
: AMR-WB IO mode, 6.6 kbit/s to 23.85 kbit/s
*RST:
SDP
Example: 
See 
"Configuring virtual subscriber profiles"
Firmware/Software: 
V3.5.31
Manual operation: 
See 
"Enable DTX in DL"
Top