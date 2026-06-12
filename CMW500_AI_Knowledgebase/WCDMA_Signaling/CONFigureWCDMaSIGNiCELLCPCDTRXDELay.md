# CONFigureWCDMaSIGNiCELLCPCDTRXDELay

Module: WCDMA Signaling
Source: 089dff68fefd4534.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
General CPC Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DTRX:DELay
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DTRX:DELay 
<EnableDelay>
Frame delay the UE waits until enabling a new timing pattern for DRX/DTX operation, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<EnableDelay>
Only the following values are allowed (in frames):
0 | 1 | 2 | 4 | 8 | 16 | 32 | 64 | 128
If you enter another value, the nearest allowed value is set instead.
Range: 
0 frames  to  128 frames
*RST:
0 frames
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS413
Manual operation: 
See 
"UE DTX DRX Enabling Delay"
Top