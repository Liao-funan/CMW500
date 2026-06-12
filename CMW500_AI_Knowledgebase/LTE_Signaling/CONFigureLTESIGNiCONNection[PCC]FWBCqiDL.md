# CONFigureLTESIGNiCONNection[PCC]FWBCqiDL

Module: LTE Signaling
Source: feb4571d09e34ca6.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FWBCqi:DL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FWBCqi:DL 
<NumberRB>, <StartRB>, <Table>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FWBCqi:DL 
<NumberRB>, <StartRB>, <Table>
Configures the downlink for the scheduling type "Follow WB CQI", with contiguous RB allocation.
The allowed input ranges have dependencies and are described in the background information, see 
"CQI Channels"
.
Suffix: 
<c>
1..4
Parameters:
<NumberRB>
Number of allocated resource blocks
*RST:
50
<StartRB>
Position of first resource block
*RST:
0
<Table>
DETermined |
 
 UDEFined
DETermined
: Automatic CQI to MCS mapping table
UDEFined
: User-defined mapping table
*RST:
DET
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.0.50, SCC command V3.2.70
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"#RB / Start RB"
Top