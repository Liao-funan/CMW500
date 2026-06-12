# CONFigureWCDMaMEASiMEValuationLIMitPHSDpcch

Module: WCDMA Measurements
Source: 8bc0db2324e1464e.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation)
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:PHSDpcch
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:PHSDpcch 
<Enable>, <MeasurePointA>, <MeasurePointB>, <Dynamic>
Defines a dynamic limit for the phase discontinuity determined by half-slot measurements (signals with HS-DPCCH). The limit is checked at point A and point B. As the phase discontinuity is measured at half-slot boundaries (x.5, not x.0) points A and B have to be set to half-slot positions.
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<MeasurePointA>
Range: 
0.5 slots  to  119.5 slots
Increment: 
0.5 slots
*RST:
0.5 slots
Default unit: 
slot
<MeasurePointB>
Range: 
0.5 slots  to  119.5 slots
Increment: 
0.5 slots
*RST:
10.5 slots
Default unit: 
slot
<Dynamic>
Range: 
0 deg  to  90 deg
*RST:
36 deg
Default unit: 
deg
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.4.11
Top