# CONFigureLTEMEASiMEValuationLIMitQAMModOrderFERRor

Module: LTE Measurements
Source: 864d350dbbbf4298.htm

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
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:FERRor
CONFigure:LTE:MEAS<i>:MEValuation:LIMit:QAM<ModOrder>:FERRor 
<FrequencyError>
Defines an upper limit for the carrier frequency error (16-QAM or 64-QAM modulation).
Suffix: 
<ModOrder>
16, 64
16-QAM or 64-QAM
Parameters:
<FrequencyError>
Range: 
0 ppm  to  1 ppm
*RST:
0.1 ppm, ON
Default unit: 
ppm
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V1.0.10.1
Top