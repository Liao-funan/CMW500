# CONFigureWCDMaSIGNiCELLCPCUDTXCYCLenoITHReshold

Module: WCDMA Signaling
Source: d5027101e65850.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Uplink DTX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CYCLe<no>:ITHReshold
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CYCLe<no>:ITHReshold 
<Threshold>
Defines when to activate the UE DTX cycle 2 after the last uplink data transmission, see 
"Continuous Packet Connectivity (CPC)"
.
Suffix: 
<no>
2
Parameters:
<Threshold>
Only the following values are allowed (in E-DCH TTI):
1 | 4 | 8 | 16 | 32 | 64 | 128 | 256
If you enter another value, the nearest allowed value is set instead.
Range: 
1 E-DCH TTI  to  256 E-DCH TTI
*RST:
8 E-DCH TTI
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