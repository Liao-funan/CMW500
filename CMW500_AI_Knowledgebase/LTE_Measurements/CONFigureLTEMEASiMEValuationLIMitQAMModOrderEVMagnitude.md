# CONFigureLTEMEASiMEValuationLIMitQAMModOrderEVMagnitude

Module: LTE Measurements
Source: 9a8283c893cc49e5.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:EVMagnitude
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:EVMagnitude 
<RMS>, <Peak>
Defines upper limits for the RMS and peak values of the error vector magnitude (EVM) for 16-QAM or 64-QAM.
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
Parameters:
<RMS>
Range: 
0 %  to  100 %
*RST:
12.5 % (16-QAM) / 8 % (64-QAM), ON
Default unit: 
%
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 %  to  100 %
*RST:
25 % (16-QAM) / 16 % (64-QAM), OFF
Default unit: 
%
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1, V3.5.50 *RST for 64-QAM changed
Top