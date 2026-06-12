# CONFigureLTESIGNiCONNection[PCC]SPSUL

Module: LTE Signaling
Source: b1aea9833fe04187.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
SPS Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SPS:UL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:SPS:UL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures the uplink RB allocation for the scheduling type SPS.
The allowed input ranges have dependencies and are described in the background information, see 
"Semi-Persistent Scheduling (SPS)"
.
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
 
 Q16
Modulation type QPSK | 16-QAM
*RST:
QPSK
<TransBlockSizeIdx>
Transport block size index
*RST:
6
Example: 
See 
"Configuring SPS"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS510
Manual operation: 
See 
"# RB ... TBSI /TBS"
Top