# CONFigureWCDMaMEASiTPCLIMitILPControlEPSTep

Module: WCDMA Measurements
Source: 67f25955b641435f.htm

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
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:EPSTep
CONFigure:WCDMa:MEAS<i>:TPC:LIMit:ILPControl:EPSTep 
<Enable>, <MaxCount>, <Step1dB>, <Step2dB>
Defines "Inner Loop Power Control" limits for exceptions and enables or disables the limit check.
Parameters:
<Enable>
OFF |
 
 ON
*RST:
OFF
<MaxCount>
Maximum allowed exceptions for sections BC, EF and GH
Range: 
1  to  10
*RST:
2
<Step1dB>
Exceptional limit for step size 1 dB
Range: 
0 dB  to  5 dB
*RST:
1.6 dB
<Step2dB>
Exceptional limit for step size 2 dB
Range: 
0 dB  to  5 dB
*RST:
1.65 dB
Example: 
See 
"Specifying Limits"
Manual operation: 
See 
"Limits"
Top