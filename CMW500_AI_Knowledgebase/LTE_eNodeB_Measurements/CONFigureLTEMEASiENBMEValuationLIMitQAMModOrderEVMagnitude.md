# CONFigureLTEMEASiENBMEValuationLIMitQAMModOrderEVMagnitude

Module: LTE eNodeB Measurements
Source: bcdaaea1da2849de.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, 16-QAM / 64-QAM)
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:QAM<ModOrder>:EVMagnitude
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:QAM<ModOrder>:EVMagnitude 
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
13.5 % (16-QAM) / 9 % (64-QAM), ON
Default unit: 
%
Additional parameters: OFF | ON (disables | enables the limit check)
<Peak>
Range: 
0 %  to  100 %
*RST:
25 % (16-QAM) / 15 % (64-QAM), OFF
Default unit: 
%
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top