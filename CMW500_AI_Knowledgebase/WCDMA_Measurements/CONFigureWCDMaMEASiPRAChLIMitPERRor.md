# CONFigureWCDMaMEASiPRAChLIMitPERRor

Module: WCDMA Measurements
Source: 8bb25878d6614094.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Limits (Modulation)
 > 
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PERRor
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error. The limit check fails the UE if the absolute value of the measured phase error exceeds the specified values.
Parameters:
<RMS>
Range: 
0 deg  to  45 deg
*RST:
10 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 deg  to  45 deg
*RST:
45 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top