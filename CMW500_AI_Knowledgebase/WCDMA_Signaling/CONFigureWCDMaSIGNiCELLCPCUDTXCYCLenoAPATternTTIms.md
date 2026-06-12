# CONFigureWCDMaSIGNiCELLCPCUDTXCYCLenoAPATternTTIms

Module: WCDMA Signaling
Source: 0189a075a3584f95.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Uplink DTX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CYCLe<no>:APATtern:TTI<ms>
CONFigure:WCDMa:SIGN<i>:CELL:CPC:UDTX:CYCLe<no>:APATtern:TTI<ms> 
<Pattern>
Defines the UL transmission reduced to DPCCH activity pattern, needed to maintain synchronization and power control loop in the UE DTX cycle, see 
"Continuous Packet Connectivity (CPC)"
.
Suffix: 
<no>
1..2
<ms>
2, 10
Parameters:
<Pattern>
Only the following values are allowed for UE DTX cycle 1 (in subframes):
1 | 5 | 10 | 20 for 10 ms TTI
1 | 4 | 5 | 8 | 10 | 16 | 20 for 2 ms TTI
Only the following values are allowed for UE DTX cycle 2 (in subframes):
5 | 10 | 20 | 40 | 80 | 160 for 10 ms TTI
4 | 5 | 8 | 10 | 16 | 20 | 32 | 40 | 64 | 80 | 128 | 160 for 2 ms TTI
If you enter another value, the nearest allowed value is set instead.
Range: 
1 Subframe to 160 Subframes
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
"DPCCH Activity Pattern"
Top