# CONFigureLTESIGNiCONNectionSCCcLAARBURstPSFConfig

Module: LTE Signaling
Source: afd695017c5a4fe0.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
RMC Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:RBURst:PSFConfig
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:RBURst:PSFConfig 
<Configuration>
Configures in which subframes partial allocation is allowed, for LAA with random bursts.
Suffix: 
<c>
1..7
Parameters:
<Configuration>
NO |
 
 INIT |
 
 END |
 
 BOTH
NO
: only full allocation
INIT
: partial allocation allowed for initial subframes
END
: partial allocation allowed for ending subframes
BOTH
: partial allocation allowed for initial and ending subframes
*RST:
NO
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS514
Manual operation: 
See 
"Partial Subframe Configuration"
Top