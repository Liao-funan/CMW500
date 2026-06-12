# CONFigureLTESIGNiCONNection[PCC]FCTTibasedDLs

Module: LTE Signaling
Source: a617681a707740f7.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Fixed CQI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCTTibased:DL<s>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCTTibased:DL<s> 
<TTI>, <NumberRB>, <StartRB>, <CQIIdx>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCTTibased:DL<s>? 
<TTI>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FCTTibased:DL<s> 
<TTI>, <NumberRB>, <StartRB>, <CQIIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FCTTibased:DL<s>? 
<TTI>
Configures a selected downlink subframe for the scheduling type "Fixed CQI".
The allowed input ranges have dependencies and are described in the background information, see 
"CQI Channels"
.
A query for TDD can also return 
OFF,OFF,OFF,OFF
, indicating that the queried subframe is no DL subframe.
Suffix: 
<s>
1..2
<c>
1..4
Parameters:
<NumberRB>
Number of allocated resource blocks. The same value must be configured for all streams of the carrier.
*RST:
50
<StartRB>
Position of first resource block. The same value must be configured for all streams of the carrier.
*RST:
0
<CQIIdx>
CQI index
Range: 
1  to  15
*RST:
1
Parameters for setting and query: 
<TTI>
Number of the subframe to be configured/queried
Range: 
0  to  9
*RST:
0
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.0.10, SCC command V3.2.50
V3.5.10: Value 
OFF
 added
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Fixed CQI"
Top