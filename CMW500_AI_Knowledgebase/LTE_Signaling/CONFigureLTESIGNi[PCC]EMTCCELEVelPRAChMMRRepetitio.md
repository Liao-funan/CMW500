# CONFigureLTESIGNi[PCC]EMTCCELEVelPRAChMMRRepetitio

Module: LTE Signaling
Source: 49c88591521d47f2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
eMTC Settings
 > 
CE Settings
 > 
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:PRACh:MMRRepetitio
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:PRACh:MMRRepetitio 
<Level>, <MaxRepetitions>
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:PRACh:MMRRepetitio? 
<Level>
Specifies the maximum number of MPDCCH repetitions for the random access response, for a certain CE level.
Parameters:
<MaxRepetitions>
R1 |
 
 R2 |
 
 R4 |
 
 R8 |
 
 R16 |
 
 R32 |
 
 R64 |
 
 R128 |
 
 R256
Maximum repetitions for the selected CE <Level>
*RST:
R1
Parameters for setting and query: 
<Level>
Selects a CE level
Range: 
0  to  3
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS590
Manual operation: 
See 
"Max MPDCCH Repetitions RA"
Top