# CONFigureLTEMEASiFSTRucture

Module: LTE Measurements
Source: d7342691e10694.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
General Measurement Settings
 > 
Duplex Mode
 > 
CONFigure:LTE:MEAS<i>:FSTRucture?
CONFigure:LTE:MEAS<i>:FSTRucture? 
Queries the frame structure type of the LTE signal. The value depends on the duplex mode (
CONFigure:
​
LTE:
​
MEAS<i>:
​
DMODe
).
Return values: 
<FrameStructure>
T1 |
 
 T2
T1:
 Type 1, FDD signal
T2:
 Type 2, TDD signal
Example: 
See 
"Specifying General and Common Measurement Settings"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Options: 
FDD requires R&S CMW-KM500
TDD requires R&S CMW-KM550
Manual operation: 
See 
"Frame Structure"
Top