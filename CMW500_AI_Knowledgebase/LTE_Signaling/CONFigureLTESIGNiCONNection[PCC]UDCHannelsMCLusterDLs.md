# CONFigureLTESIGNiCONNection[PCC]UDCHannelsMCLusterDLs

Module: LTE Signaling
Source: a0b0cea0effb4e68.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings (No LAA)
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:MCLuster:DL<s>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDCHannels:MCLuster:DL<s> 
<Cluster>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:MCLuster:DL<s> 
<Cluster>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined downlink channel with multi-cluster allocation (no LAA, no eMTC).
The <Cluster> setting applies to all DL streams. The other settings apply to DL stream <s>.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
 and especially 
Table "RBG parameters"
.
Suffix: 
<s>
1..2
<c>
1..4
Parameters:
<Cluster>
Bitmap, enabling or disabling the individual RBGs
1 means RBG is allocated, 0 means RBG is not allocated
The number of bits depends on the cell bandwidth and equals the total number of RBGs.
The bitmap starts with RBG 0 (most significant bit) and continues with increasing RBG index / frequency.
Example for 1.4 MHz BW:
#B101010 means that the RBGs 0, 2 and 4 are allocated
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
V3.5.50
Options: 
R&S CMW-KS510
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"Multicluster"
Top