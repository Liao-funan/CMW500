# CONFigureLTEMEASiMEValuationSSUBframe

Module: LTE Measurements
Source: c699974a28fb4fcb.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:SSUBframe
CONFigure:LTE:MEAS<i>:MEValuation:SSUBframe 
<SpecialSubframe>
Selects a special subframe configuration, defining the inner structure of special subframes. This parameter is only relevant for frame structure "Type 2" (
CONFigure:
​
LTE:
​
MEAS<i>:
​
FSTRucture?
).
The special subframe configurations are defined in 3GPP TS 36.211, chapter 4, "Frame Structure".
For the combined signal path scenario, use 
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
SSUBframe
.
Parameters:
<SpecialSubframe>
Range: 
0  to  8
*RST:
0
Example: 
See 
"Specifying Required Settings"
Firmware/Software: 
V1.0.10.1
Options: 
R&S CMW-KM550
Manual operation: 
See 
"Special Subframe"
Top