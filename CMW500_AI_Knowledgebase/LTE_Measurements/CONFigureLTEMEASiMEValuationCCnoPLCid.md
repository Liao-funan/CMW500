# CONFigureLTEMEASiMEValuationCCnoPLCid

Module: LTE Measurements
Source: f7e6465e89d54860.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:CC<no>:PLCid
CONFigure:LTE:MEAS<i>:MEValuation:CC<no>:PLCid 
<PhsLayerCellID>
Specifies the physical layer cell ID of component carrier CC<no>. Without carrier aggregation, you can omit <no>.
For the combined signal path scenario, use:
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
PCID
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL:
​
SCC<c>:
​
PCID
Suffix: 
<no>
1..3
Parameters:
<PhsLayerCellID>
Range: 
0  to  503
*RST:
0
Example: 
See 
"Specifying Required Settings"
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Physical Cell ID"
Top