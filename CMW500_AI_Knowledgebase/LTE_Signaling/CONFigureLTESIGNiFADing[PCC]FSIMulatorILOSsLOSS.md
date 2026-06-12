# CONFigureLTESIGNiFADing[PCC]FSIMulatorILOSsLOSS

Module: LTE Signaling
Source: 28a668b7a85346d1.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:ILOSs:LOSS
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:ILOSs:LOSS 
<InsertionLoss>
CONFigure:LTE:SIGN<i>:FADing:SCC<c>:FSIMulator:ILOSs:LOSS 
<InsertionLoss>
Sets the insertion loss for the fading simulator.
A setting is only allowed in 
USER
 mode (see 
CONFigure:...:FSIMulator:ILOSs:MODE
).
Suffix: 
<c>
1..4
Parameters:
<InsertionLoss>
Range: 
0 dB  to  30 dB
*RST:
0 dB
Default unit: 
dB
Firmware/Software: 
V3.0.20, SCC command V3.2.70
Options: 
See relevant fading scenario
Manual operation: 
See 
"Insertion Loss"
Top