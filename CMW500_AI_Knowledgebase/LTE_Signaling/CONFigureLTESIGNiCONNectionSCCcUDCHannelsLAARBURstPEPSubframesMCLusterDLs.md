# CONFigureLTESIGNiCONNectionSCCcUDCHannelsLAARBURstPEPSubframesMCLusterDLs

Module: LTE Signaling
Source: bdd2c9f1a0b34610.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:PEPSubframes:MCLuster:DL<s>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:PEPSubframes:MCLuster:DL<s> 
<Symbols>, <Cluster>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:PEPSubframes:MCLuster:DL<s>? 
<Symbols>
Configures a user-defined downlink channel with multi-cluster allocation, for LAA, random bursts.
The <Cluster> setting applies to all subframes of the burst and to all DL streams.
The <Modulation> and <TransBlockSizeIdx> settings apply to partial ending subframes with the specified number of allocated OFDM <Symbols> and DL stream <s>.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels for LAA"
 and especially 
Table "RBG parameters"
.
Suffix: 
<c>
1..4
<s>
1..2
Parameters:
<Cluster>
Bitmap, enabling or disabling the individual RBGs
1 means RBG is allocated, 0 means RBG is not allocated
The number of bits depends on the cell bandwidth and equals the total number of RBGs.
The bitmap starts with RBG 0 (most significant bit) and continues with increasing RBG index / frequency.
Example for 20 MHz BW:
#B1010100000000000000000011 allocates RBG 0, 2, 4, 23, 24
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
Parameters for setting and query: 
<Symbols>
S6 |
 
 S9 |
 
 S10 |
 
 S11 |
 
 S12
Number of OFDM symbols allocated in the ending subframe
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS510 and R&S CMW-KS514
Manual operation: 
See 
"Multicluster"
Top