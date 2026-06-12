# CONFigureLTESIGNiCONNection[PCC]UDTTibasedUL

Module: LTE Signaling
Source: 36355cd146d64266.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined TTI-Based Channel Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL 
<TTI>, <NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL? 
<TTI>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:UL 
<TTI>, <NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:UL? 
<TTI>
Configures a selected uplink subframe for all scheduling types with a TTI-based UL definition.
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
.
A query for TDD can also return 
OFF,OFF,OFF,OFF
, indicating that the queried subframe is no UL subframe.
For UL-DL configuration 0, use the command 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
SCC<c>:
​
UDTTibased:
​
UL:
​
ALL
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
 
 Q64 |
 
 OFF
Modulation type QPSK | 16-QAM | 64-QAM | no UL subframe
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
*RST:
6
Parameters for setting and query: 
<TTI>
Number of the subframe to be configured/queried.
Range: 
0  to  9
Example: 
See 
"Configuring TTI-Based User-Defined Channels"
Firmware/Software: 
V2.0.20
V3.5.10: value 
OFF
 added
V3.5.20: SCC command added
V3.7.10: Q64 added
Options: 
R&S CMW-KS510
64-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"UL configuration commands"
Top