# CONFigureLTESIGNiCONNection[PCC]UDTTibasedDLsALL

Module: LTE Signaling
Source: be6d3e586e9c469c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined TTI-Based Channel Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s>:ALL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:DL<s>:ALL 
<NumberRB>(10), <StartRB>(10), <Modulation>(10), <TransBlockSizeIdx>(10)
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:DL<s>:ALL 
<NumberRB>(10), <StartRB>(10), <Modulation>(10), <TransBlockSizeIdx>(10)
Configures all downlink subframes for the scheduling type "User-defined TTI-Based".
The parameters are entered 10 times, so that all subframes are configured by a single command (index = subframe number 0 to 9):
<NumberRB>
0
, ..., <NumberRB>
9
, <StartRB>
0
, ..., <StartRB>
9
, <Modulation>
0
, ..., <Modulation>
9
, <TransBlockSizeIdx>
0
, ..., <TransBlockSizeIdx>
9
The allowed input ranges have dependencies and are described in the background information, see 
"User-Defined Channels"
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
Example: 
See 
"Configuring TTI-Based User-Defined Channels"
Firmware/Software: 
V2.1.30, SCC command V3.2.50
V3.5.10 added 
OFF
, V3.5.40 added 256-QAM
Options: 
R&S CMW-KS510
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"User-Defined TTI-Based"
Top