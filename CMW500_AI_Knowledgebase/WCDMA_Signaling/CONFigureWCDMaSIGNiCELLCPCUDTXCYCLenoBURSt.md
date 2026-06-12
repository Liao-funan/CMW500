# CONFigureWCDMaSIGNiCELLCPCUDTXCYCLenoBURSt

Module: WCDMA Signaling
Source: d5027101e65742.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Uplink DTX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CYCLe<no>:BURSt
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CYCLe<no>:BURSt 
<Burst>
Length of DPCCH transmission during UE DTX cycle, see 
"Continuous Packet Connectivity (CPC)"
.
Suffix: 
<no>
1..2
Parameters:
<Burst>
Only the following values are allowed (in subframes):
1 | 2 | 5
If you enter another value, the nearest allowed value is set instead.
Range: 
1 Subframe  to  5 Subframe
*RST:
1 Subframe
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS413
Manual operation: 
See 
"UE DPCCH Burst"
Top