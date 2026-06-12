# CONFigureNIOTMEASiMEValuationLIMitPERRor

Module: NBIoT Measurements
Source: fd535ace65b44f3b.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits Modulation
 > 
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:PERRor
CONFigure:NIOT:MEAS<i>:MEValuation:LIMit:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error. The limit check fails if the absolute value of the measured phase error exceeds the specified values.
Parameters:
<RMS>
Range: 
0 deg  to  180 deg
*RST:
17.5 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
<Peak>
Range: 
0 deg  to  180 deg
*RST:
35 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous/default limit values)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.5.10
Top