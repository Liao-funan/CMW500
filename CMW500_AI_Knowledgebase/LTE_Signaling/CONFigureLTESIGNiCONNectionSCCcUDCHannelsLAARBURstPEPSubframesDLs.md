# CONFigureLTESIGNiCONNectionSCCcUDCHannelsLAARBURstPEPSubframesDLs

Module: LTE Signaling
Source: a35020507b6e42ab.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:PEPSubframes:DL<s>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:PEPSubframes:DL<s> 
<Symbols>, <NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:RBURst:PEPSubframes:DL<s>? 
<Symbols>
Configures a user-defined downlink channel with contiguous allocation, for LAA, random bursts.
The <NumberRB> and <StartRB> settings apply to all subframes of the burst and to all DL streams.
The <Modulation> and <TransBlockSizeIdx> settings apply to partial ending subframes with the specified number of allocated OFDM <Symbols> and DL stream <s>.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels for LAA"
.
Suffix: 
<c>
1..4
<s>
1..2
Parameters:
<NumberRB>
Number of allocated resource blocks
*RST:
100
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
"#RB ... TBS (PEPS 12 Symbols)"
Top