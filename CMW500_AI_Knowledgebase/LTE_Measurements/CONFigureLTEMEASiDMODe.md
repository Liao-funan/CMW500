# CONFigureLTEMEASiDMODe

Module: LTE Measurements
Source: 76007bec51294a04.htm

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
CONFigure:LTE:MEAS<i>:DMODe
CONFigure:LTE:MEAS<i>:DMODe 
<Mode>
Selects the duplex mode of the LTE signal: FDD or TDD.
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>[:
​
PCC]:
​
DMODe
CONFigure:
​
LTE:
​
SIGN<i>:
​
SCC<c>:
​
DMODe
CONFigure:
​
LTE:
​
SIGN<i>[:
​
PCC]:
​
DMODe:
​
UCSPecific
Parameters:
<Mode>
FDD |
 
 TDD
Example: 
See 
"Specifying General and Common Measurement Settings"
Firmware/Software: 
V2.0.10
Options: 
FDD requires R&S CMW-KM500
TDD requires R&S CMW-KM550
Manual operation: 
See 
"Duplex Mode"
Top