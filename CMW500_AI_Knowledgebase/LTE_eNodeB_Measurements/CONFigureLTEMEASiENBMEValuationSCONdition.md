# CONFigureLTEMEASiENBMEValuationSCONdition

Module: LTE eNodeB Measurements
Source: d35e7456.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SCONdition
CONFigure:LTE:MEAS<i>:ENB:MEValuation:SCONdition 
<StopCondition>
Qualifies whether the measurement is stopped after a failed limit check or continued. 
SLFail
 means that the measurement is stopped and reaches the 
RDY
 state when one of the results exceeds the limits.
Parameters:
<StopCondition>
NONE |
 
 SLFail
NONE:
 Continue measurement irrespective of the limit check
SLFail:
 Stop measurement on limit failure
*RST:
NONE
Example: 
See 
"Specifying Measurement-Specific Settings"
Firmware/Software: 
V3.0.20
Top