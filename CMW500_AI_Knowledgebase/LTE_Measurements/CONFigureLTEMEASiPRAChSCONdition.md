# CONFigureLTEMEASiPRAChSCONdition

Module: LTE Measurements
Source: d7342691e54081.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:LTE:MEAS<i>:PRACh:SCONdition
CONFigure:LTE:MEAS<i>:PRACh:SCONdition 
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
V2.0.10
Manual operation: 
See 
"Stop Condition"
Top