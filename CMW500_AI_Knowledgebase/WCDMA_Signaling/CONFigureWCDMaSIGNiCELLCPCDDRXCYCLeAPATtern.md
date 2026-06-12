# CONFigureWCDMaSIGNiCELLCPCDDRXCYCLeAPATtern

Module: WCDMA Signaling
Source: d5027101e65998.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Downlink DRX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DDRX:CYCLe:APATtern
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DDRX:CYCLe:APATtern 
<Pattern>
Reception pattern, to inform UE how often to monitor HS-SCCH, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<Pattern>
Only the following values are allowed (in subframes):
4 | 5 | 8 | 10 | 16 | 20
If you enter another value, the nearest allowed value is set instead.
Range: 
4 Subframe  to  20 Subframe
*RST:
10 Subframe
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS413
Manual operation: 
See 
"Activity Pattern"
Top