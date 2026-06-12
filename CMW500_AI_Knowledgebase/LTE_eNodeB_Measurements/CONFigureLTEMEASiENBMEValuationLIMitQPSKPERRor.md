# CONFigureLTEMEASiENBMEValuationLIMitQPSKPERRor

Module: LTE eNodeB Measurements
Source: 5a61d4d8bcc1458c.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Limits (Modulation, QPSK)
 > 
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:QPSK:PERRor
CONFigure:LTE:MEAS<i>:ENB:MEValuation:LIMit:QPSK:PERRor 
<RMS>, <Peak>
Defines symmetric limits for the RMS and peak values of the phase error for QPSK. The limit check fails if the absolute value of the measured phase error exceeds the specified values.
Parameters:
<RMS>
Range: 
0 deg  to  180 deg
*RST:
18.5 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables | enables the limit check)
<Peak>
Range: 
0 deg  to  180 deg
*RST:
35 deg, OFF
Default unit: 
deg
Additional parameters: OFF | ON (disables | enables the limit check)
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Top