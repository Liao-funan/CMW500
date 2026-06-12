# CONFigureLTESIGNiCONNection[PCC]FCTTibasedDLsALL

Module: LTE Signaling
Source: 839907eef7ca4710.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Fixed CQI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCTTibased:DL<s>:ALL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCTTibased:DL<s>:ALL 
<NumberRB>(10), <StartRB>(10), <CQIIdx>(10)
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FCTTibased:DL<s>:ALL 
<NumberRB>(10), <StartRB>(10), <CQIIdx>(10)
Configures the downlink channel for the scheduling type "Fixed CQI".
The parameters are entered 10 times, so that all subframes are configured by a single command (index = subframe number 0 to 9):
<NumberRB>
0
, ..., <NumberRB>
9
, <StartRB>
0
, ..., <StartRB>
9
, <CQIIdx>
0
, ..., <CQIIdx>
9
The allowed input ranges have dependencies and are described in the background information, see 
"CQI Channels"
.
For TDD UL and special subframes, you can set 
OFF
 or specify a number from the allowed input range. The effect is the same. A query returns 
OFF
 for non-DL subframes.
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