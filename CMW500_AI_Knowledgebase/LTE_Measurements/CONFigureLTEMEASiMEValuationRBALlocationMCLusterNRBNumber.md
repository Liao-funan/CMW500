# CONFigureLTEMEASiMEValuationRBALlocationMCLusterNRBNumber

Module: LTE Measurements
Source: d6f3f5ed242045f2.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:MEValuation:RBALlocation:MCLuster:NRB<Number>
CONFigure:LTE:MEAS<i>:MEValuation:RBALlocation:MCLuster:NRB<Number> 
<NoRB>
Specifies the number of allocated RBs in the measured slot, for multi-cluster allocation.
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection[:
​
PCC]:
​
RMC:
​
MCLuster:
​
UL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection[:
​
PCC]:
​
UDCHannels:
​
MCLuster:
​
UL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
SCC<c>:
​
RMC:
​
MCLuster:
​
UL
CONFigure:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
SCC<c>:
​
UDCHannels:
​
MCLuster:
​
UL
Suffix: 
<Number>
1, 2
Selects the cluster to be configured
Parameters:
<NoRB>
For the allowed input ranges, see 
"Resource Block Allocation"
.
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"No. of RBs, Offset RB (with multi-cluster)"
Top