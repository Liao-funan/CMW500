# CONFigureLTESIGNiCONNection[PCC]RMCMCLusterUL

Module: LTE Measurements
Source: 1277820315604836.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Multi-Evaluation Measurement
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:MCLuster:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:RMC:MCLuster:UL 
<NumberRB1>, <PositionRB1>, <NumberRB2>, <PositionRB2>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:RMC:MCLuster:UL 
<NumberRB1>, <PositionRB1>, <NumberRB2>, <PositionRB2>, <Modulation>, <TransBlockSizeIdx>
Configures an uplink reference measurement channel (RMC) with multi-cluster allocation.
Suffix: 
<c>
1..7
Parameters:
<NumberRB1>
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
Number of allocated resource blocks, cluster 1
*RST:
N42
<PositionRB1>
FULL |
 
 LOW |
 
 HIGH |
 
 MID |
 
 P0 |
 
 P1 |
 
 P2 |
 
 P3 |
 
 P4 |
 
 P6 |
 
 P7 |
 
 P8 |
 
 P9 |
 
 P10 |
 
 P11 |
 
 P12 |
 
 P13 |
 
 P14 |
 
 P15 |
 
 P16 |
 
 P19 |
 
 P20 |
 
 P21 |
 
 P22 |
 
 P24 |
 
 P25 |
 
 P28 |
 
 P30 |
 
 P31 |
 
 P33 |
 
 P36 |
 
 P37 |
 
 P39 |
 
 P40 |
 
 P43 |
 
 P44 |
 
 P45 |
 
 P48 |
 
 P49 |
 
 P50 |
 
 P51 |
 
 P52 |
 
 P54 |
 
 P56 |
 
 P57 |
 
 P58 |
 
 P62 |
 
 P63 |
 
 P66 |
 
 P68 |
 
 P70 |
 
 P74 |
 
 P75 |
 
 P83 |
 
 P96 |
 
 P99
Position of first RB, cluster 1
*RST:
P0
<NumberRB2>
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
Number of allocated resource blocks, cluster 2
*RST:
N3
<PositionRB2>
FULL |
 
 LOW |
 
 HIGH |
 
 MID |
 
 P0 |
 
 P1 |
 
 P2 |
 
 P3 |
 
 P4 |
 
 P6 |
 
 P7 |
 
 P8 |
 
 P9 |
 
 P10 |
 
 P11 |
 
 P12 |
 
 P13 |
 
 P14 |
 
 P15 |
 
 P16 |
 
 P19 |
 
 P20 |
 
 P21 |
 
 P22 |
 
 P24 |
 
 P25 |
 
 P28 |
 
 P30 |
 
 P31 |
 
 P33 |
 
 P36 |
 
 P37 |
 
 P39 |
 
 P40 |
 
 P43 |
 
 P44 |
 
 P45 |
 
 P48 |
 
 P49 |
 
 P50 |
 
 P51 |
 
 P52 |
 
 P54 |
 
 P56 |
 
 P57 |
 
 P58 |
 
 P62 |
 
 P63 |
 
 P66 |
 
 P68 |
 
 P70 |
 
 P74 |
 
 P75 |
 
 P83 |
 
 P96 |
 
 P99
Position of first RB, cluster 2
*RST:
P45
<Modulation>
Q16
Modulation type 16-QAM
*RST:
Q16
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
T11
Firmware/Software: 
V3.5.20, some Nx and Tx added in later versions
Manual operation: 
See 
"No. of RBs, Offset RB (with multi-cluster)"
Top