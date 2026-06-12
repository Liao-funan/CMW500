# CONFigureLTESIGNiULSETAPUSChTPCCLTPower

Module: LTE Signaling
Source: 0db1754958414019.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:CLTPower
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:CLTPower 
<Power>
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:CLTPower 
<Power>
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:TPC:CLTPower 
<Power>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:CLTPower 
<Power>
Defines the target power for power control with the TPC setup 
CLOop
.
Suffix: 
<c>
1..4
Parameters:
<Power>
Range: 
-50 dBm  to  33 dBm
*RST:
-20 dBm
Default unit: 
dBm
Example: 
See 
"Modifying Parameters for an Established Connection"
Firmware/Software: 
PCC V3.2.60, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Closed Loop Target Power"
Top