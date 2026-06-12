# CONFigureLTEMEASiSRSSCONdition

Module: LTE Measurements
Source: d7342691e63118.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE SRS Measurement
 > 
Command Reference
 > 
SRS Measurement Commands
 > 
Measurement Parameters
 > 
CONFigure:LTE:MEAS<i>:SRS:SCONdition
CONFigure:LTE:MEAS<i>:SRS:SCONdition 
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
V2.0.20
Manual operation: 
See 
"Stop Condition"
Top