# CONFigureWCDMaSIGNiCELLCPCDDRXCYCLeITHReshold

Module: WCDMA Signaling
Source: d5027101e66044.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Downlink DRX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DDRX:CYCLe:ITHReshold
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DDRX:CYCLe:ITHReshold 
<Threshold>
Number of subframes after downlink activity where UE has to continuously monitor HS-SCCH, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<Threshold>
Only the following values are allowed (in subframes):
0 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128 | 256 | 512
If you enter another value, the nearest allowed value is set instead.
Range: 
0 Subframe  to  512 Subframe
*RST:
0 Subframe
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS413
Manual operation: 
See 
"Inactivity Threshold"
Top