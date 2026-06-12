# CONFigureAUDioMEASiANALogSCONdition

Module: Audio Measurements
Source: fb05c6b7fb6949a5.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
General Measurement Settings
 > 
CONFigure:AUDio:MEAS<i>:ANALog:SCONdition
CONFigure:AUDio:MEAS<i>:ANALog:SCONdition 
<StopCondition>
CONFigure:AUDio:MEAS<i>:DIGital:SCONdition 
<StopCondition>
Specifies whether the measurement is stopped after a failed limit check or continued. 
OLFA
 means that the measurement is stopped and reaches the 
RDY
 state when one of the results exceeds the limits.
Parameters:
<StopCondition>
NONE |
 
 OLFA
NONE:
 Continue measurement irrespective of the limit check
OLFA:
 Stop measurement on limit failure
*RST:
NONE
Example: 
See 
"General Measurement Settings"
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Stop Condition"
Top