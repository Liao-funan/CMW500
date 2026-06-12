# CONFigureWCDMaMEASiMEValuationPSLot

Module: WCDMA Measurements
Source: d5028154e11522.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:PSLot
CONFigure:WCDMa:MEAS<i>:MEValuation:PSLot 
<SlotNumber>
Selects the slot where the R&S
 
CMW calculates the results of single slot measurements: ACLR, emission mask, EVM vs. chip, CD monitor. The number of the preselected slot must be smaller than the number of measured slots (
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
MSCount
).
Parameters:
<SlotNumber>
Range: 
0  to  119
*RST:
0
Example: 
See 
"Configuring Measurement-Specific Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Preselected Slot"
Top