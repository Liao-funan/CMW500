# CONFigureWCDMaMEASiTPCLIMitILPControlPSTep

Module: WCDMA Measurements
Source: 9c071744823948d1.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Limits
 > 
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:PSTep
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:PSTep 
<Enable>, <Step0dB>, <Step1dB>, <Step2dB>
Defines "Inner Loop Power Control" limits: upper limits for the absolute value of the power step error, depending on the expected step size. Also enables or disables the limit check.
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<Step0dB>
Limit for steps with expected step size 0 dB
Range: 
0 dB  to  5 dB
*RST:
0.6 dB
Default unit: 
dB
<Step1dB>
Limit for steps with expected step size 
±
1 dB
Range: 
0 dB  to  5 dB
*RST:
0.6 dB
Default unit: 
dB
<Step2dB>
Limit for steps with expected step size 
±
2 dB
Range: 
0 dB  to  5 dB
*RST:
1.15 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Limits"
Top