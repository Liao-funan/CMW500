# CONFigureLTESIGNiULSETAPUSChTPCRPControl

Module: LTE Signaling
Source: 472bf2f863e94eef.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:RPControl
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:RPControl 
<Pattern>
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:RPControl 
<Pattern>
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:TPC:RPControl 
<Pattern>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:RPControl 
<Pattern>
Selects a TPC pattern for 3GPP relative power control tests with the TPC setup 
RPControl
.
Suffix: 
<c>
1..4
Parameters:
<Pattern>
RUA |
 
 RDA |
 
 RUB |
 
 RDB |
 
 RUC |
 
 RDC
RUA | RUB | RUC
: ramping up A | B | C
RDA | RDB | RDC
: ramping down A | B | C
*RST:
RUA
Example: 
See 
"Modifying Parameters for an Established Connection"
Firmware/Software: 
PCC V3.2.50, SCC V3.5.20, SETx V3.7.30
Manual operation: 
See 
"3GPP Rel. Pow. Ctrl. Pattern"
Top