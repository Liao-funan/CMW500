# CONFigureLTESIGNiCONNectionHARQULDPHich

Module: LTE Signaling
Source: bfe7eac0b72a4ba7.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
HARQ Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:HARQ:UL:DPHich
CONFigure:LTE:SIGN<i>:CONNection:HARQ:UL:DPHich 
<Mode>
Selects how the UE is informed about required retransmissions / successful transmissions for UL HARQ.
Parameters:
<Mode>
D0ONly |
 
 PHIChonly |
 
 D0PHich
D0ONly
PDCCH with DCI 0 plus new data indicator (NDI) bit
PHIChonly
Physical hybrid-ARQ indicator channel (PHICH) with ACK/NACK
D0PHich
Both methods
*RST:
D0ONly
Example: 
See 
"Configuring HARQ"
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS510
Manual operation: 
See 
"DCI-0 / PHICH"
Top