# CONFigureLTESIGNiCONNection[PCC]RMCUL

Module: LTE Signaling
Source: f6c8d1cbca794a9c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
RMC Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:UL 
<NumberRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:RMC:UL 
<NumberRB>, <Modulation>, <TransBlockSizeIdx>
Configures an uplink reference measurement channel (RMC) with contiguous allocation. Only certain value combinations are accepted, see 
"Scheduling Type RMC"
.
Suffix: 
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
Number of allocated resource blocks
*RST:
N50
<Modulation>
QPSK |
 
 Q16 |
 
 Q64
Modulation type QPSK | 16-QAM | 64-QAM
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
T6
Example: 
See 
"Configuring RMCs"
Firmware/Software: 
V3.0.20, some Nx and Tx added in later versions
V3.5.10: SCC command
V3.7.10: 64-QAM
Options: 
64-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"# Resource Blocks"
Top