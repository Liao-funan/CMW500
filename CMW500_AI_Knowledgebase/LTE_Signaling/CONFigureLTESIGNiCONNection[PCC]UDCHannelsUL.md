# CONFigureLTESIGNiCONNection[PCC]UDCHannelsUL

Module: LTE Signaling
Source: 0ac92b62c51f4ccf.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:UL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:UL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined uplink channel with contiguous allocation. The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
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
<Modulation>
QPSK |
 
 Q16 |
 
 Q64
Modulation type QPSK | 16-QAM | 64-QAM
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
V2.0.20, SCC command V3.5.20
V3.7.10: Q64 added
Options: 
R&S CMW-KS510
64-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"# Resource Blocks ... Transport Block Size"
Top