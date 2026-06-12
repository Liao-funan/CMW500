# CONFigureWCDMaMEASiTPCLIMitILPControlPSGRoup

Module: WCDMA Measurements
Source: 32abd351b60c4665.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:PSGRoup
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:PSGRoup 
<Enable>, <Group10x0dB>, <Group10x1dBAlg2>, <Group10x1dB>, <Group10x2dB>
Defines "Inner Loop Power Control" limits: upper limits for the absolute value of the power step group error, depending on the expected step size. Also enables or disables the limit check.
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<Group10x0dB>
Limit for groups with expected step size 10 x 0 dB (algorithm 2)
Range: 
0 dB  to  9 dB
*RST:
1.1 dB
Default unit: 
dB
<Group10x1dBAlg2>
Limit for groups with expected step size 10 x 
±
1 dB + 40 x 0 dB (algorithm 2)
Range: 
0 dB  to  9 dB
*RST:
4.3 dB
Default unit: 
dB
<Group10x1dB>
Limit for groups with expected step size 10 x 
±
1 dB (algorithm 1)
Range: 
0 dB  to  9 dB
*RST:
2.3 dB
Default unit: 
dB
<Group10x2dB>
Limit for groups with expected step size 10 x 
±
2 dB (algorithm 1)
Range: 
0 dB  to  9 dB
*RST:
4.3 dB
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