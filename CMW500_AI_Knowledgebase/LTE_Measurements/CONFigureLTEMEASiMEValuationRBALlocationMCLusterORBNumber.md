# CONFigureLTEMEASiMEValuationRBALlocationMCLusterORBNumber

Module: LTE Measurements
Source: 0792ce5c33d34032.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:RBALlocation:MCLuster:ORB<Number>
CONFigure:LTE:MEAS<i>:MEValuation:RBALlocation:MCLuster:ORB<Number> 
<OffsetRB>
Specifies the offset of the first allocated resource block, for multi-cluster allocation.
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
<OffsetRB>
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