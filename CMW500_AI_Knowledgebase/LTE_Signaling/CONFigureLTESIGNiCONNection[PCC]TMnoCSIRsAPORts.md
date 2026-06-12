# CONFigureLTESIGNiCONNection[PCC]TMnoCSIRsAPORts

Module: LTE Signaling
Source: 0e4490d17c024fb2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
MIMO TM 9 Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CSIRs:APORts
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TM<no>:CSIRs:APORts 
<Ports>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:TM<no>:CSIRs:APORts 
<Ports>
Selects the antenna ports used for the CSI-RS for TM 9.
Suffix: 
<no>
9
<c>
1..7
Parameters:
<Ports>
NONE |
 
 P15 |
 
 P1516 |
 
 P1518 |
 
 P1522
NONE
: no CSI-RS
P15
: port 15
P1516
: port 15 and 16
P1518
: port 15 to 18
P1522
: port 15 to 22
*RST:
P1516
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.5.10
Options: 
P1516 (2x2): R&S CMW-KS520
P1518 (4x2): R&S CMW-KS521
P1518 (4x4): R&S CMW-KS540
P1522 (8x2): R&S CMW-KS522
Manual operation: 
See 
"CSI-RS Antenna Ports"
Top