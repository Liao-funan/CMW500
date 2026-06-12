# CONFigureLTESIGNiCONNectionSCCcLAAFBURstSPFSubframe

Module: LTE Signaling
Source: 11bdaaec265e4de2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:FBURst:SPFSubframe
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:FBURst:SPFSubframe 
<StartingPos>
Selects the first allocated OFDM symbol for initial subframes, for LAA with fixed bursts.
Suffix: 
<c>
1..7
Parameters:
<StartingPos>
OFDM0 |
 
 OFDM7
OFDM0
: symbol 0 (full allocation)
OFDM7
: symbol 7 (partial allocation, needs burst length > 1)
*RST:
OFDM0
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS514
Manual operation: 
See 
"Start Position of First Subframe of Burst"
Top