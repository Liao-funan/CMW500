# CONFigureLTESIGNiCONNection[PCC]FCRIMCLusterDL

Module: LTE Signaling
Source: 2da6d228c7614813.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI-RI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCRI:MCLuster:DL
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCRI:MCLuster:DL 
<Cluster>, <Table>
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FCRI:MCLuster:DL 
<Cluster>, <Table>
Configures the downlink for the scheduling type "Follow WB CQI-RI", with multi-cluster allocation.
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
<Table>
DETermined |
 
 UDEFined
DETermined
: Automatic CQI to MCS mapping table
UDEFined
: User-defined mapping table
*RST:
DET
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Multicluster DL"
Top