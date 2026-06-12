# CONFigureLTESIGNiCONNection[PCC]RMCDLs

Module: LTE Signaling
Source: 0a2a2a5138644d37.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
RMC Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:DL<s>
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:DL<s> 
<NumberRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:RMC:DL<s> 
<NumberRB>, <Modulation>, <TransBlockSizeIdx>
Configures a downlink reference measurement channel (RMC). Only certain value combinations are accepted, see 
"Scheduling Type RMC"
.
Suffix: 
<s>
1..2
<c>
1..7
Parameters:
<NumberRB>
ZERO |
 
 N1 |
 
 N2 |
 
 N3 |
 
 N4 |
 
 N5 |
 
 N6 |
 
 N7 |
 
 N8 |
 
 N9 |
 
 N10 |
 
 N12 |
 
 N15 |
 
 N16 |
 
 N17 |
 
 N18 |
 
 N20 |
 
 N24 |
 
 N25 |
 
 N27 |
 
 N30 |
 
 N32 |
 
 N36 |
 
 N40 |
 
 N42 |
 
 N45 |
 
 N48 |
 
 N50 |
 
 N54 |
 
 N60 |
 
 N64 |
 
 N72 |
 
 N75 |
 
 N80 |
 
 N81 |
 
 N83 |
 
 N90 |
 
 N92 |
 
 N96 |
 
 N100
Number of allocated resource blocks. The same value must be configured for all streams of the carrier.
*RST:
N50
<Modulation>
QPSK |
 
 Q16 |
 
 Q64 |
 
 Q256
Modulation type QPSK | 16-QAM | 64-QAM | 256-QAM
*RST:
QPSK
<TransBlockSizeIdx>
ZERO |
 
 T1 |
 
 T2 |
 
 T3 |
 
 T4 |
 
 T5 |
 
 T6 |
 
 T7 |
 
 T10 |
 
 T11 |
 
 T12 |
 
 T13 |
 
 T14 |
 
 T15 |
 
 T17 |
 
 T18 |
 
 T19 |
 
 T21 |
 
 T22 |
 
 T23 |
 
 T24 |
 
 T25 |
 
 T30 |
 
 T31 |
 
 T32 |
 
 T8 |
 
 T9 |
 
 T16 |
 
 T20 |
 
 T26 |
 
 T27 |
 
 T28 |
 
 T29
Transport block size index. Use KEEP to select a compatible value.
*RST:
T5
Example: 
See 
"Configuring RMCs"
Firmware/Software: 
V3.0.20, some Nx and Tx added in later versions
V3.2.50: SCC command
V3.5.30: 256-QAM
Options: 
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"# Resource Blocks"
Top