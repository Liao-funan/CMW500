# CONFigureLTESIGNiCONNectionSCCcLAARBURstBLENgth

Module: LTE Signaling
Source: a07d72aa6f2b4f58.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Scheduling Commands
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:RBURst:BLENgth
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:LAA:RBURst:BLENgth 
<BurstLength>(10)
Specifies the possible burst lengths for LAA with random bursts. At least one value must be allowed (ON).
Suffix: 
<c>
1..4
Parameters:
<BurstLength>
OFF |
 
 ON
Comma-separated list of 10 values
Allowing lengths of (1, 2, 3, 4, 5, 6, 7, 8, 9, 10) subframes
*RST:
ON,OFF,ON,OFF,ON,OFF,OFF,ON,OFF,OFF
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS514
Manual operation: 
See 
"Possible Burst Lengths"
Top