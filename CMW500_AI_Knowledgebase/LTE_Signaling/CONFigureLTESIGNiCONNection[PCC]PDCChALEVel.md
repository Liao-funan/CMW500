# CONFigureLTESIGNiCONNection[PCC]PDCChALEVel

Module: LTE Signaling
Source: 050b80654ab94731.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
PDCCH Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PDCCh:ALEVel
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:PDCCh:ALEVel 
<Aggregationlevel>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:PDCCh:ALEVel 
<Aggregationlevel>
Configures the aggregation levels for DCI messages with C-RNTI.
The individual values have prerequisites, see manual operation.
Suffix: 
<c>
1..4
Parameters:
<Aggregationlevel>
AUTO |
 
 D8U4 |
 
 D4U4 |
 
 D4U2 |
 
 D1U1 |
 
 D8U8
AUTO
: automatic configuration
D<a>U<b>
: <a> CCE for DCI messages for the DL, <b> CCE for messages for the UL
*RST:
AUTO
Example: 
See 
"Configuring General Connection Settings Part 2"
Firmware/Software: 
V3.2.82, V3.7.10 added D8U8
Manual operation: 
See 
"Aggr. Level DL/UL Config, Aggreg. Level ..."
Top