# CONFigureWCDMaMEASiPRAChLIMitPCONtrolOLPower

Module: WCDMA Measurements
Source: d5028154e62696.htm

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
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PCONtrol:OLPower
CONFigure:WCDMa:MEAS<i>:PRACh:LIMit:PCONtrol:OLPower 
<Enable>, <InitPreamblePwr>, <OLPLimit>
Enables or disables the check of the open loop power limits and specifies these limits.
Parameters:
<Enable>
OFF |
 
 ON
Disables | enables the limit check
*RST:
ON
<InitPreamblePwr>
Initial preamble power
Range: 
-50 dBm  to  34 dBm
*RST:
-18.6 dBm
Default unit: 
dBm
<OLPLimit>
Open loop power tolerance value
Range: 
0 dB  to  15 dB
*RST:
10 dB
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