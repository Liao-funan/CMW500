# CONFigureLTESIGNiCONNection[PCC]QAMModOrderDL

Module: LTE Signaling
Source: e195ffadb1bb40ea.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:QAM<ModOrder>:DL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:QAM<ModOrder>:DL 
<Enable>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:QAM<ModOrder>:DL 
<Enable>
Selects which 3GPP tables are used for CQI scheduling: tables with 256-QAM or without 256-QAM.
Suffix: 
<ModOrder>
256
<c>
1..4
Parameters:
<Enable>
OFF |
 
 ON
ON
: use tables with 256-QAM
OFF
: use tables without 256-QAM
*RST:
OFF
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"Use 256-QAM"
Top