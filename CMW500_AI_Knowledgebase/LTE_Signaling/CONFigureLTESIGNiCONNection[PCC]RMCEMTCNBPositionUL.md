# CONFigureLTESIGNiCONNection[PCC]RMCEMTCNBPositionUL

Module: LTE Signaling
Source: e5be103a6d9f4b4f.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
RMC Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:EMTC:NBPosition:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:EMTC:NBPosition:UL 
<Position>
Selects the narrowband for an eMTC UL RMC.
The allowed NBx values depend on the cell bandwidth, see 
Table "NB position values depending on bandwidth"
.
Parameters:
<Position>
LOW |
 
 HIGH |
 
 NB1 |
 
 NB2 |
 
 NB3 |
 
 NB4 |
 
 NB5 |
 
 NB6 |
 
 NB7 |
 
 NB8 |
 
 NB9 |
 
 NB10 |
 
 NB11 |
 
 NB12 |
 
 NB13 |
 
 NB14
LOW
: NB0
HIGH
: highest NB within the cell bandwidth
*RST:
LOW
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20, V3.7.30 added NB1 to NB14
Options: 
R&S CMW-KS590
Manual operation: 
See 
"NB Position"
Top