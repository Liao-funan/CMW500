# CONFigureLTESIGNiCONNectionSCCcLAAFBURstOSLSubframe

Module: LTE Signaling
Source: c2b43cdca57d4b52.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:FBURst:OSLSubframe
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:FBURst:OSLSubframe 
<occOFDMsymbols>
Specifies the number of allocated OFDM symbols for ending subframes, for LAA with fixed bursts.
At least one subframe of each burst must have full allocation. This rule restricts the allowed values for the burst lengths 1 and 2.
Suffix: 
<c>
1..7
Parameters:
<occOFDMsymbols>
SYM6 |
 
 SYM9 |
 
 SYM10 |
 
 SYM11 |
 
 SYM12 |
 
 SYM14
6 to 12 OFDM symbols (partial allocation)
14 OFDM symbols (full allocation)
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS514
Manual operation: 
See 
"Occupied OFDM Symbols in Last Subframe of Burst"
Top