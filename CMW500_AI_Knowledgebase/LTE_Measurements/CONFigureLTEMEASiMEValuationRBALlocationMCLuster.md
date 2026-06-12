# CONFigureLTEMEASiMEValuationRBALlocationMCLuster

Module: LTE Measurements
Source: 9458205324a04e6f.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:RBALlocation:MCLuster
CONFigure:LTE:MEAS<i>:MEValuation:RBALlocation:MCLuster 
<Enable>
Specifies whether the UL signal uses multi-cluster allocation or not.
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
MCLuster:
​
UL
Parameters:
<Enable>
OFF |
 
 ON
OFF
: contiguous allocation, resource allocation type 0
ON
: multi-cluster allocation, resource allocation type 1
*RST:
OFF
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"Multicluster"
Top