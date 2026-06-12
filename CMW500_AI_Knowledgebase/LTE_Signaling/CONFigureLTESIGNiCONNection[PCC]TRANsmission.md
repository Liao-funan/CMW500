# CONFigureLTESIGNiCONNection[PCC]TRANsmission

Module: LTE Signaling
Source: 84224f3a8a2349a3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General MIMO Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TRANsmission
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:TRANsmission 
<Mode>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:TRANsmission 
<Mode>
Selects the LTE transmission mode. The value must be compatible to the active scenario, see 
Table "Transmission scheme overview"
.
Suffix: 
<c>
1..7
Parameters:
<Mode>
TM1 |
 
 TM2 |
 
 TM3 |
 
 TM4 |
 
 TM6 |
 
 TM7 |
 
 TM8 |
 
 TM9
Transmission mode 1, 2, 3, 4, 6, 7, 8, 9
*RST:
TM1
Example: 
See 
"Configuring  MIMO Settings"
Firmware/Software: 
V3.2.70, V3.5.10: TM9 added
Options: 
R&S CMW-KS520 or -KS540 for TM 2, 3, 4, 6, 7, 9
R&S CMW-KS520 for TM 8
Manual operation: 
See 
"Transmission Mode"
Top