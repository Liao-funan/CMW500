# CONFigureWLANMEASiMEValuationLIMitPVTimeFEDGe

Module: WLAN Measurements
Source: 6908fb67cd634f37.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Limits
 > 
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:PVTime:FEDGe
CONFigure:WLAN:MEAS<i>:MEValuation:LIMit:PVTime:FEDGe 
<FallingLimit>
Sets the upper limit for the fall time (transmit power-down ramp) of a DSSS signal.
Parameters:
<FallingLimit>
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