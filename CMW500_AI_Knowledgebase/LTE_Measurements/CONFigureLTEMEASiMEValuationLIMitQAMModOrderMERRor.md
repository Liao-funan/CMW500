# CONFigureLTEMEASiMEValuationLIMitQAMModOrderMERRor

Module: LTE Measurements
Source: 1ea89cb5e1e64c56.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:MERRor
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:MERRor 
<RMS>, <Peak>
Defines upper limits for the RMS and peak values of the magnitude error for 16-QAM or 64-QAM.
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
Parameters:
<RMS>
Range: 
0 %  to  100 %
*RST:
12.5 % (16-QAM) / 7.5 % (64-QAM), OFF
Default unit: 
%
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 %  to  100 %
*RST:
25 % (16-QAM) / 15 % (64-QAM), OFF
Default unit: 
%
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top