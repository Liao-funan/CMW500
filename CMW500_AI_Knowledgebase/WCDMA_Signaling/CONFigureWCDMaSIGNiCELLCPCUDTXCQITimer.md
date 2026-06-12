# CONFigureWCDMaSIGNiCELLCPCUDTXCQITimer

Module: WCDMA Signaling
Source: 1864e43a31f44077.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Uplink DTX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CQITimer
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CQITimer 
<Timer>
Number of subframes after an HS-DSCH reception during which the CQI reports have higher priority than the DTX pattern and are transmitted according to the regular CQI pattern, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<Timer>
0 |
 
 1 |
 
 2 |
 
 4 |
 
 8 |
 
 16 |
 
 32 |
 
 64 |
 
 128 |
 
 256 |
 
 512 |
 
 ON |
 
 OFF
If you enter another value, the nearest allowed value is set instead.
Range: 
0 Subframe  to  512 Subframe
*RST:
0 Subframe
Default unit: 
subframe
Additional OFF | ON disables | enables the CQI DTX timer
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS413
Manual operation: 
See 
"CQI DTX Timer"
Top