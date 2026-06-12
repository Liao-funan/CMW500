# CONFigureLTESIGNiCONNection[PCC]PZERoMAPPing

Module: LTE Signaling
Source: ad9ab21933f947bc.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO Beamforming Settings TM 7/8
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PZERo:MAPPing
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PZERo:MAPPing 
<Port>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:PZERo:MAPPing 
<Port>
Selects the mapping of antenna port 0 to the RF output paths.
Only for TM 7 in scenarios with two RF output paths, without fading.
Suffix: 
<c>
1..7
Parameters:
<Port>
R1 |
 
 R1R2
R1
: Map port 0 to the first RF output path.
R1R2
: Map port 0 to both RF output paths.
*RST:
R1
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS520
Manual operation: 
See 
"Port 0 Mapping"
Top