# CONFigureLTEMEASiENBMEValuationLIMitQAMModOrderPERRor

Module: LTE eNodeB Measurements
Source: 30f0a8b11fee44ac.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, 16-QAM / 64-QAM)
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:QAM<ModOrder>:PERRor
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:QAM<ModOrder>:PERRor 
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
13.5 deg (16-QAM) / 9 deg (64-QAM), OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables | enables the limit check)
<Peak>
Range: 
0 deg  to  180 deg
*RST:
25 deg (16-QAM) / 15 deg (64-QAM), OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top