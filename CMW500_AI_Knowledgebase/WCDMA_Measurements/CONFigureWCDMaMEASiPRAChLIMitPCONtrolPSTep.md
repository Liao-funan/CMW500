# CONFigureWCDMaMEASiPRAChLIMitPCONtrolPSTep

Module: WCDMA Measurements
Source: d5028154e62801.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Limits (Power Control)
 > 
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PCONtrol:PSTep
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PCONtrol:PSTep 
<Enable>, <PreamblePwrStep>, <PwrStepLimit>
Enables or disables the check of the preamble power step limits and specifies these limits.
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<PreamblePwrStep>
Expected preamble power step size
Range: 
0 dB  to  15 dB
*RST:
2 dB
Default unit: 
dB
<PwrStepLimit>
Preamble power step tolerance value
Range: 
0 dB  to  15 dB
*RST:
2 dB
Default unit: 
dB
Example: 
See 
"Specifying Limits"
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"Limits"
Top