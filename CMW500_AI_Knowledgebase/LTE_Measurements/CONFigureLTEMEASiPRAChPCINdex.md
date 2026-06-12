# CONFigureLTEMEASiPRAChPCINdex

Module: LTE Measurements
Source: 266711a738614235.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:PRACh:PCINdex
CONFigure:LTE:MEAS<i>:PRACh:PCINdex 
<PRACHconfIndex>
The PRACH configuration index identifies the PRACH configuration used by the UE (preamble format, which resources in the time domain are allowed for transmission of preambles etc.).
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
PRACh:
​
PCINdex:
​
FDD
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
PRACh:
​
PCINdex:
​
TDD
Parameters:
<PRACHconfIndex>
Range: 
0  to  63 for FDD / 57 for TDD
*RST:
0
Example: 
See 
"Specifying Required PRACH Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"PRACH Configuration Index"
Top