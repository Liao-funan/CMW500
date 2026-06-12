# CONFigureLTESIGNiCONNection[PCC]FPMIDL

Module: LTE Signaling
Source: c45e50d3c67c4d1c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB PMI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FPMI:DL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FPMI:DL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FPMI:DL 
<NumberRB>, <StartRB>, <Modulation>, <TransBlockSizeIdx>
Configures the downlink for the scheduling type "Follow WB PMI", with contiguous allocation.
The allowed input ranges have dependencies and are described in the background information, see 
"CQI Channels"
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
"Configuring CQI DL Channels"
Firmware/Software: 
V3.2.80, V3.5.40 added 256-QAM
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"#RB / Start RB"
Top