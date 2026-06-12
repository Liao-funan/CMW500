# CONFigureWCDMaMEASiNBMEValuationMODulationSSCalar

Module: WCDMA NodeB Measurements
Source: 4d11ca1df27348ae.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation and CDP Measurement Settings
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:MODulation:SSCalar
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:MODulation:SSCalar 
<SlotNumber>
Selects a particular slot within the "Measurement Length" where the R&S
 
CMW evaluates the statistical measurement results for multislot measurements. The slot number must be smaller than the number of measured slots (see 
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
"Slot Number (Table)"
Top