# CONFigureLTEMEASiMEValuationLIMitQPSKPERRor

Module: LTE Measurements
Source: 22a3bd2e83c54f4a.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, QPSK)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:PERRor
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QPSK:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error for QPSK. The limit check fails if the absolute value of the measured phase error exceeds the specified values.
Parameters:
<RMS>
Range: 
0 deg  to  180 deg
*RST:
17.5 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 deg  to  180 deg
*RST:
35 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top