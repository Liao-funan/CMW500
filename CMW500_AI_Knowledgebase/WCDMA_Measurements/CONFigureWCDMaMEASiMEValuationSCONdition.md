# CONFigureWCDMaMEASiMEValuationSCONdition

Module: WCDMA Measurements
Source: d5028154e11398.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:WCDMa:MEAS<i>:MEValuation:SCONdition
CONFigure:WCDMa:MEAS<i>:MEValuation:SCONdition 
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
NONE
: Continue measurement irrespective of the limit check
SLFail
: Stop measurement on limit failure
*RST:
NONE
Example: 
See 
"Configuring Measurement-Specific Settings"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Stop Condition"
Top