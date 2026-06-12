# CONFigureWCDMaMEASiNBMEValuationSCONdition

Module: WCDMA NodeB Measurements
Source: bb291b5507de4b23.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:SCONdition
CONFigure:WCDMa:MEAS<i>:NB:MEValuation:SCONdition 
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
 continue measurement irrespective of the limit check
SLFail:
 stop measurement on limit failure
*RST:
NONE
Example: 
See 
"Specifying Additional Measurement-Specific Settings"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Stop Condition"
Top