# CONFigureWLANMEASiMEValuationLIMitPVTimeREDGe

Module: WLAN Measurements
Source: 09c99d8900974641.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Limits
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:PVTime:REDGe
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:PVTime:REDGe 
<RisingLimit>
Sets the upper limit for the rise time (transmit power-on ramp) of a DSSS signal.
Parameters:
<RisingLimit>
Range: 
0 s  to  5E-6 s
Increment: 
1E-8 s
*RST:
2E-6 s
Default unit: 
s
Additional parameters: OFF | ON (disables the limit check | enables the limit check using the previous limit values)
Example: 
See 
"Specifying Limits (DSSS)"
Firmware/Software: 
V2.1.10, V3.0.11: finer granularity
Top