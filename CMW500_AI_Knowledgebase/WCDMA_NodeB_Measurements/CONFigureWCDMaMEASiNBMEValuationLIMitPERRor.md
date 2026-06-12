# CONFigureWCDMaMEASiNBMEValuationLIMitPERRor

Module: WCDMA NodeB Measurements
Source: c4ca94c938884389.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation)
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:PERRor
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:LIMit:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error. The limit check fails if the absolute value of the measured phase error exceeds the specified values.
Parameters:
<RMS>
Range: 
0 deg  to  180 deg
*RST:
10 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 deg  to  180 deg
*RST:
180 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Limits"
Top