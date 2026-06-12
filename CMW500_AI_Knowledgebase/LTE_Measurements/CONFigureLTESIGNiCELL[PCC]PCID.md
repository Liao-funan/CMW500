# CONFigureLTESIGNiCELL[PCC]PCID

Module: LTE Measurements
Source: 3e61a0fb547846dc.htm

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
CONFigure:LTE:SIGN<i>:CELL[:PCC]:PCID
CONFigure:LTE:SIGN<i>:CELL[:PCC]:PCID 
<ID>
CONFigure:LTE:SIGN<i>:CELL:SCC<c>:PCID 
<ID>
Defines the physical cell ID used for generation of the DL physical synchronization signals. If you use carrier aggregation, configure different values for the component carriers.
Suffix: 
<c>
1..7
Parameters:
<ID>
Range: 
0  to  503
*RST:
0 for PCC / 1 for SCC1 / 2 for SCC2
Firmware/Software: 
V1.0.15.20, SCC command V3.2.50
Manual operation: 
See 
"Physical Cell ID"
Top