# CONFigureLTESIGNiCONNection[PCC]RMCRBPositionUL

Module: LTE Signaling
Source: 1585f31796b74876.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
RMC Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:RBPosition:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:RBPosition:UL 
<Position>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:RMC:RBPosition:UL 
<Position>
Selects the position of the allocated uplink resource blocks within the cell bandwidth, for contiguous allocation.
The RBs can always be at the lower end, starting with RB number 0 (LOW), or at the upper end of the channel (HIGH). Other values are only allowed for certain RMC configurations, see 
"Scheduling Type RMC"
.
Suffix: 
<c>
1..4
Parameters:
<Position>
LOW |
 
 HIGH |
 
 MID |
 
 P0 |
 
 P1 |
 
 P2 |
 
 P3 |
 
 P4 |
 
 P6 |
 
 P7 |
 
 P8 |
 
 P9 |
 
 P10 |
 
 P11 |
 
 P12 |
 
 P13 |
 
 P14 |
 
 P15 |
 
 P16 |
 
 P19 |
 
 P20 |
 
 P21 |
 
 P22 |
 
 P24 |
 
 P25 |
 
 P28 |
 
 P30 |
 
 P31 |
 
 P33 |
 
 P36 |
 
 P37 |
 
 P39 |
 
 P40 |
 
 P43 |
 
 P44 |
 
 P45 |
 
 P48 |
 
 P49 |
 
 P50 |
 
 P51 |
 
 P52 |
 
 P54 |
 
 P56 |
 
 P57 |
 
 P58 |
 
 P62 |
 
 P63 |
 
 P66 |
 
 P68 |
 
 P70 |
 
 P74 |
 
 P75 |
 
 P83 |
 
 P96 |
 
 P99
*RST:
LOW
Example: 
See 
"Configuring RMCs"
Firmware/Software: 
V3.0.20, SCC command V3.5.10
V3.2.70: values P1 - P4, P7, P9, P10, P14, P15, P36, P39, P44, P49, P74, P75, P99
V3.5.10: values P0, P6, P8, P12, P22, P24, P45, P68, P96
V3.5.30: values P20, P21, P28, P30, P31, P33, P40, P50-P52, P54, P57, P58, P62, P63, P66, P70, P83
Manual operation: 
See 
"RB Position/Start RB"
Top