# CONFigureNIOTMEASiMEValuationSCONdition

Module: NBIoT Measurements
Source: 972ce4ad7a734ca9.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control Parameters
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:SCONdition
CONFigure:NIOT:MEAS<i>:MEValuation:SCONdition 
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
V3.5.10
Manual operation: 
See 
"Stop Condition"
Top