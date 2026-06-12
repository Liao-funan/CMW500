# CONFigureLTESIGNiULSETAPUSChTPCSINGle

Module: LTE Signaling
Source: 71d0d92cc89a4947.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Uplink Power Control
 > 
TX Power Control (TPC)
 > 
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:SINGle
CONFigure:LTE:SIGN<i>:UL:SETA:PUSCh:TPC:SINGle 
<NoOfSteps>, <StepDirection>
CONFigure:LTE:SIGN<i>:UL:SETB:PUSCh:TPC:SINGle 
<NoOfSteps>, <StepDirection>
CONFigure:LTE:SIGN<i>:UL[:PCC]:PUSCh:TPC:SINGle 
<NoOfSteps>, <StepDirection>
CONFigure:LTE:SIGN<i>:UL:SCC<c>:PUSCh:TPC:SINGle 
<NoOfSteps>, <StepDirection>
Defines a pattern for power control of the PUSCH with the TPC setup 
SINGle
. The pattern consists of 1 to 35 up (+1 dB) or down (-1 dB) commands, followed by "constant power" commands (0 dB).
Suffix: 
<c>
1..4
Parameters:
<NoOfSteps>
Range: 
1  to  35
*RST:
1
<StepDirection>
UP |
 
 DOWN
*RST:
UP
Example: 
See 
"Modifying Parameters for an Established Connection"
Firmware/Software: 
PCC V3.0.10, SCC V3.5.30, SETx V3.7.30
Manual operation: 
See 
"Single Pattern"
Top