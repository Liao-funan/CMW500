# CONFigureWCDMaMEASiMEValuationLIMitPERRor

Module: WCDMA Measurements
Source: 3e151ea9526f4019.htm

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
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:PERRor
CONFigure:WCDMa:MEAS<i>:MEValuation:LIMit:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error. The limit check fails if the absolute value of the measured phase error exceeds the specified values.
Parameters:
<RMS>
Range: 
0 deg  to  45 deg
*RST:
10 deg, OFF
Default unit: 
deg
Additional OFF | ON disables/enables the limit check using the previous/default limit values
<Peak>
Range: 
0 deg  to  45 deg
*RST:
45 deg, OFF
Default unit: 
deg
Additional OFF | ON disables/enables the limit check using the previous/default limit values
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.0.4
Top