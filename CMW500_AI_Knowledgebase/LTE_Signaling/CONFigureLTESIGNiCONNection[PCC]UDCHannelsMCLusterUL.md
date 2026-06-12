# CONFigureLTESIGNiCONNection[PCC]UDCHannelsMCLusterUL

Module: LTE Signaling
Source: ca9776e425a54008.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:MCLuster:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:MCLuster:UL 
<NumberRB1>, <StartRB1>, <NumberRB2>, <StartRB2>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:MCLuster:UL 
<NumberRB1>, <StartRB1>, <NumberRB2>, <StartRB2>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined uplink channel with multi-cluster allocation.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
.
Suffix: 
<c>
1..7
Parameters:
<NumberRB1>
Number of allocated resource blocks, cluster 1
*RST:
45
<StartRB1>
Position of first RB, cluster 1
*RST:
0
<NumberRB2>
Number of allocated resource blocks, cluster 2
*RST:
2
<StartRB2>
Position of first RB, cluster 2
*RST:
48
<Modulation>
QPSK |
 
 Q16
Modulation type QPSK | 16-QAM
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
*RST:
6
Example: 
See 
"Configuring User-Defined Channels"
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"# Resource Blocks ... Transport Block Size"
Top