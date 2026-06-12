# CONFigureLTESIGNiCONNectionHARQDLUDSequence

Module: LTE Signaling
Source: 62a388ea7f444d86.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
HARQ Connection Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection:HARQ:DL:UDSequence
CONFigure:LTE:SIGN<i>:CONNection:HARQ:DL:UDSequence 
<Value1>[, <Value2>, <Value3>, <Value4>]
Specifies the user-defined redundancy version sequence. Only the first n values are used, according to the specified length, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
HARQ:
​
DL:
​
UDSequence:
​
LENGth
.
You can either set the first value only (relevant for initial transmissions) or all four values.
Parameters:
<Value1>
In this software version fixed set to 0
Range: 
0
*RST:
0
<Value2>
Range: 
0  to  3
*RST:
0
<Value3>
Range: 
0  to  3
*RST:
0
<Value4>
Range: 
0  to  3
*RST:
0
Example: 
See 
"Configuring HARQ"
Firmware/Software: 
V3.0.50
Manual operation: 
See 
"Redundancy Version Coding Sequence, User Defined Sequence"
Top