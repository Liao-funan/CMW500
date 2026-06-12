# CONFigureLTEMEASiPRAChMODulationZCZConfig

Module: LTE Measurements
Source: 9db7ee1417a44fbb.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Modulation Measurement Settings
 > 
CONFigure:LTE:MEAS<i>:PRACh:MODulation:ZCZConfig
CONFigure:LTE:MEAS<i>:PRACh:MODulation:ZCZConfig 
<ZeroCorrZoneCon>
Specifies the zero correlation zone config, i.e. which N
CS
 value of an N
CS
 set is used for generation of the preamble sequence.
For the combined signal path scenario, use 
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
ZCZConfig
.
Parameters:
<ZeroCorrZoneCon>
Range: 
0 to 15 (for preamble format 4: 0 to 6)
*RST:
0
Example: 
See 
"Specifying Required PRACH Settings"
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Zero Correlation Zone Config"
Top