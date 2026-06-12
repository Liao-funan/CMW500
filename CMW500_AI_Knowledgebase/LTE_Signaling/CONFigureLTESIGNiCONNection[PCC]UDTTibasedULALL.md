# CONFigureLTESIGNiCONNection[PCC]UDTTibasedULALL

Module: LTE Signaling
Source: b0d901b416764517.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
User-Defined TTI-Based Channel Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL:ALL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:UDTTibased:UL:ALL 
<NumberRB>(10), <StartRB>(10), <Modulation>(10), <TransBlockSizeIdx>(10)
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:UDTTibased:UL:ALL 
<NumberRB>(10), <StartRB>(10), <Modulation>(10), <TransBlockSizeIdx>(10)
Configures the uplink channel for all scheduling types with a TTI-based UL definition.
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
For TDD DL and special subframes, you can set 
OFF
 or specify a number from the allowed input range. The effect is the same. A query returns 
OFF
 for non-UL subframes.
For UL-DL configuration 0, the settings specified for subframe number 2 are automatically applied to all UL subframes.
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
Example: 
See 
"Configuring TTI-Based User-Defined Channels"
Firmware/Software: 
V2.1.30
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