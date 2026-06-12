# CONFigureGSMMEASiMEValuationSCONdition

Module: GSM Measurements
Source: d35e11088.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Statistical Settings
 > 
CONFigure:GSM:MEAS<i>:MEValuation:SCONdition
CONFigure:GSM:MEAS<i>:MEValuation:SCONdition 
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
V1.0.0.4
Manual operation: 
See 
"Stop Condition"
Top