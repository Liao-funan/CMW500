# CONFigureWCDMaMEASiNBMEValuationPSLot

Module: WCDMA NodeB Measurements
Source: a8672ea615f046a7.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:PSLot
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:PSLot 
<SlotNumber>
Selects the slot where the R&S
 
CMW calculates the results of single slot measurements: ACLR, emission mask, EVM vs. chip, magnitude error vs chip, phase error vs chip, CD monitor. The number of the preselected slot must be smaller than the number of measured slots (
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
NB:
​
MEValuation:
​
MSCount
).
Parameters:
<SlotNumber>
Range: 
0  to  14
*RST:
0
Example: 
See 
"Specifying Additional Measurement-Specific Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Preselected Slot"
Top