# CONFigureLTESIGNiCONNectionSCCcLAARBURstLSConfig

Module: LTE Signaling
Source: 3950a2deda4640d5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:RBURst:LSConfig
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:RBURst:LSConfig 
<Config>(6)
Specifies the possible number of allocated OFDM symbols in ending subframes for LAA with random bursts. At least one value must be allowed (ON).
Suffix: 
<c>
1..4
Parameters:
<Config>
OFF |
 
 ON
Comma-separated list of 6 values
Allowing (6, 9, 10, 11, 12, 14) symbols
*RST:
OFF,OFF,OFF,OFF,OFF,ON
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS514
Manual operation: 
See 
"Possible Last Subframe of Burst"
Top