# CONFigureLTEMEASiMEValuationLIMitQAMModOrderPERRor

Module: LTE Measurements
Source: d71cc7e938974f32.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, 16-QAM / 64-QAM)
 > 
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PERRor
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error for 16-QAM or 64-QAM. The limit check fails if the absolute value of the measured phase error exceeds the specified values.
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
Parameters:
<RMS>
Range: 
0 deg  to  180 deg
*RST:
12.5 deg (16-QAM) / 7.5 deg (64-QAM), OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 deg  to  180 deg
*RST:
25 deg (16-QAM) / 15 deg (64-QAM), OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top