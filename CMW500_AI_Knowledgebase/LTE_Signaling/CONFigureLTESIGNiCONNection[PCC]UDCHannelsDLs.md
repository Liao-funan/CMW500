# CONFigureLTESIGNiCONNection[PCC]UDCHannelsDLs

Module: LTE Signaling
Source: 84659d37bd494d99.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:DL<s>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:DL<s> 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:DL<s> 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined downlink channel with contiguous allocation (no LAA, no eMTC).
The <NumberRB> and <StartRB> settings apply to all DL streams. The other settings apply to DL stream <s>.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
.
Suffix: 
<s>
1..2
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
 
 Q64 |
 
 Q256
Modulation type QPSK | 16-QAM | 64-QAM | 256-QAM
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
*RST:
5
Example: 
See 
"Configuring User-Defined Channels"
Firmware/Software: 
V2.0.10, SCC command V3.2.50, V3.5.30 added 256-QAM
Options: 
R&S CMW-KS510
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"# Resource Blocks ... Transport Block Size"
Top