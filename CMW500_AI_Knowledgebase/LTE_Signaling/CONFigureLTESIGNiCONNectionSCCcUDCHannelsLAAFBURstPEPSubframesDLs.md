# CONFigureLTESIGNiCONNectionSCCcUDCHannelsLAAFBURstPEPSubframesDLs

Module: LTE Signaling
Source: bb6f6f5fe4574774.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined Channel Settings for LAA
 > 
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:FBURst:PEPSubframes:DL<s>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDCHannels:LAA:FBURst:PEPSubframes:DL<s> 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures a user-defined downlink channel with contiguous allocation, for LAA, fixed bursts.
The <NumberRB> and <StartRB> settings apply to all subframes of the burst and to all DL streams. The other settings apply to ending subframes with partial allocation and DL stream <s>.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels for LAA"
.
Suffix: 
<c>
1..7
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
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS510 and R&S CMW-KS514
Manual operation: 
See 
"# Resource Blocks ... TBS (Ending Partial SF)"
Top