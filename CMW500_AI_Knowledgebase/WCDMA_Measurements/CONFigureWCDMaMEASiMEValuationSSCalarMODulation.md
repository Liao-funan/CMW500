# CONFigureWCDMaMEASiMEValuationSSCalarMODulation

Module: WCDMA Measurements
Source: 47e0050326f44b24.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Modulation Settings
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:SSCalar:MODulation
CONFigure:WCDMa:MEAS<i>:MEValuation:SSCalar:MODulation 
<SlotNumber>
Selects a particular slot or half-slot within the measurement length where the R&S
 
CMW evaluates the statistical measurement results for multislot measurements. The slot number must be smaller than the number of measured slots (see 
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
0  to  119.5
Increment: 
0.5
*RST:
0
Example: 
See 
"Configuring Measurement-Specific Settings"
Firmware/Software: 
V1.0.4.11
Manual operation: 
See 
"Slot Number (Table)"
Top