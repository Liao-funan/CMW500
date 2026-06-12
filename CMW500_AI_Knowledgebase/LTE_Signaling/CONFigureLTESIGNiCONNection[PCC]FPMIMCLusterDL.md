# CONFigureLTESIGNiCONNection[PCC]FPMIMCLusterDL

Module: LTE Signaling
Source: 5f09eee5c8d8415b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB PMI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FPMI:MCLuster:DL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FPMI:MCLuster:DL 
<Cluster>, <Modulation>, <TransBlockSizeIdx>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FPMI:MCLuster:DL 
<Cluster>, <Modulation>, <TransBlockSizeIdx>
Configures the downlink for the scheduling type "Follow WB PMI", with multi-cluster allocation.
The allowed input ranges have dependencies and are described in the background information, see 
"CQI Channels"
 and especially 
Table "RBG parameters"
.
Suffix: 
<c>
1..4
Parameters:
<Cluster>
Bitmap, enabling or disabling the individual RBGs
1 means RBG is allocated, 0 means RBG is not allocated
The number of bits depends on the cell bandwidth and equals the total number of RBGs.
The bitmap starts with RBG 0 (most significant bit) and continues with increasing RBG index / frequency.
Example for 1.4 MHz BW:
#B101010 means that the RBGs 0, 2 and 4 are allocated
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
V3.5.50
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
256-QAM: R&S CMW-KS504/-KS554 for FDD/TDD
Manual operation: 
See 
"Multicluster DL"
Top