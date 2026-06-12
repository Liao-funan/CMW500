# CONFigureLTESIGNiFADing[PCC]FSIMulatorDSHift

Module: LTE Signaling
Source: 73b28b73948d457d.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Internal Fading
 > 
Fading Simulator
 > 
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:DSHift
CONFigure:LTE:SIGN<i>:FADing[:PCC]:FSIMulator:DSHift 
<Frequency>
CONFigure:LTE:SIGN<i>:FADing:SCC<c>:FSIMulator:DSHift 
<Frequency>
Sets the maximum Doppler frequency for the fading simulator.
A setting is only allowed in 
USER
 mode (see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
FADing[:
​
PCC]:
​
FSIMulator:
​
DSHift:
​
MODE
).
Suffix: 
<c>
1..7
Parameters:
<Frequency>
Range: 
1 Hz  to  2000 Hz
*RST:
5 Hz
Default unit: 
Hz
Example: 
See 
"Configuring Internal Fading"
Firmware/Software: 
V3.2.20, SCC command V3.2.70
Options: 
See relevant fading scenario
Manual operation: 
See 
"Doppler Frequency Mode, Doppler Frequency"
Top