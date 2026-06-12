# CONFigureLTESIGNiULSETAPUSChOLNPower

Module: LTE Signaling
Source: 24e48929728b4701.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
PRACH and Initial PUSCH Power
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:OLNPower
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:OLNPower 
<Power>
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:OLNPower 
<Power>
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:OLNPower 
<Power>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:OLNPower 
<Power>
Defines a cell-specific nominal power value for full resource block allocation in the UL (entire cell bandwidth used). From this value, the cell-specific nominal power value P
O_NOMINAL_PUSCH
 related to one resource block is determined and sent to all UEs via broadcast.
This command is only relevant for basic configuration and rejected if advanced configuration is active.
Suffix: 
<c>
1..4
Parameters:
<Power>
Range: 
-50 dBm  to  23 dBm
*RST:
-20 dBm
Default unit: 
dBm
Example: 
See 
"Configuring UL Power Control for Call Setup"
Firmware/Software: 
PCC V3.5.10, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Open Loop Nominal Power"
Top