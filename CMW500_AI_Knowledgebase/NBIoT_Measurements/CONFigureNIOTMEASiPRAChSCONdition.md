# CONFigureNIOTMEASiPRAChSCONdition

Module: NBIoT Measurements
Source: 93c5577d7c43468e.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Measurement Parameters - General Part
 > 
CONFigure:NIOT:MEAS<i>:PRACh:SCONdition
CONFigure:NIOT:MEAS<i>:PRACh:SCONdition 
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
V3.7.20
Manual operation: 
See 
"Stop Condition"
Top