# CONFigureLTESIGNiCONNection[PCC]RMCRBPositionDLs

Module: LTE Signaling
Source: aae8fef29dc24466.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
RMC Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:RBPosition:DL<s>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:RBPosition:DL<s> 
<Position>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:RMC:RBPosition:DL<s> 
<Position>
Selects the position of the allocated downlink resource blocks within the cell bandwidth. Set the same value for both streams of a carrier.
The RBs can always be at the lower end, starting with RB number 0, or at the upper end of the channel. The other values are only allowed for certain configurations with one TX antenna, see 
"DL RMCs, One TX Antenna (TM 1)"
.
Suffix: 
<s>
1..2
<c>
1..7
Parameters:
<Position>
LOW |
 
 HIGH |
 
 P5 |
 
 P10 |
 
 P23 |
 
 P35 |
 
 P48
*RST:
LOW
Example: 
See 
"Configuring RMCs"
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"RB Position/Start RB"
Top