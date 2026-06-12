# CONFigureLTESIGNiULSETAPUSChTPCCLTPowerOFFSet

Module: LTE Signaling
Source: 05ce4eaff991449c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:CLTPower:OFFSet
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:CLTPower:OFFSet 
<Offset>
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:CLTPower:OFFSet 
<Offset>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:CLTPower:OFFSet 
<Offset>
Defines a target power offset relative to the power master CC, for power control with the TPC setup 
CLOop
.
The setting is irrelevant for carriers with independent UL power control.
Suffix: 
<c>
1..4
Parameters:
<Offset>
Target power = master target power + <Offset>
Range: 
-7 dB  to  7 dB
*RST:
0 dB
Default unit: 
dB
Example: 
See 
"Modifying Parameters for an Established Connection"
Firmware/Software: 
V3.5.50, SETx V3.7.30
Manual operation: 
See 
"Closed Loop Target Power"
Top