# CONFigureLTESIGNiULSETAPUSChTPCPEXecute

Module: LTE Signaling
Source: c2064c42ff1e4104.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:PEXecute
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:PEXecute
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:PEXecute
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:TPC:PEXecute
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:PEXecute
Execute the active TPC setup for power control of the PUSCH. This command is only relevant for setups which are not executed automatically (
SINGle
, 
UDSingle
, 
RPControl
, 
FULPower
).
Suffix: 
<c>
1..4
Example: 
See 
"Modifying Parameters for an Established Connection"
Usage: 
Event
Firmware/Software: 
PCC V2.0.20, SCC V3.5.20, SETx V3.7.30
Manual operation: 
See 
"Active TPC Setup"
Top