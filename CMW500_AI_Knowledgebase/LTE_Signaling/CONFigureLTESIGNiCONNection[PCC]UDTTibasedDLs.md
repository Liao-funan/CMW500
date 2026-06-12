# CONFigureLTESIGNiCONNection[PCC]UDTTibasedDLs

Module: LTE Signaling
Source: 253f035646f34aad.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined TTI-Based Channel Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s> 
<TTI>, <NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s>? 
<TTI>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:DL<s> 
<TTI>, <NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:DL<s>? 
<TTI>
Configures a selected downlink subframe for the scheduling type "User-defined TTI-Based".
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
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
Number of allocated resource blocks. The same value must be configured for all streams.
*RST:
50
<StartRB>
Position of first resource block. The same value must be configured for all streams of the carrier.
*RST:
0
<Modulation>
QPSK |
 
 Q16 |
 
 Q64 |
 
 Q256 |
 
 OFF
Modulation type QPSK | 16-QAM | 64-QAM | 256-QAM | no DL subframe
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
*RST:
5
Parameters for setting and query: 
<TTI>
Number of the subframe to be configured/queried.
Range: 
0  to  9
*RST:
0
Example: 
See 
"Configuring TTI-Based User-Defined Channels"
Firmware/Software: 
V3.2.50, V3.5.10 added 
OFF
, V3.5.40 added 256-QAM
Options: 
R&S CMW-KS510
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"User-Defined TTI-Based"
Top