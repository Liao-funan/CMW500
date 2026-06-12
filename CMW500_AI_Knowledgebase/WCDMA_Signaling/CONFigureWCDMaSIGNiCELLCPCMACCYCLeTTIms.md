# CONFigureWCDMaSIGNiCELLCPCMACCYCLeTTIms

Module: WCDMA Signaling
Source: e8338f04181e4ac6.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
E-DCH TX Start Time Restriction
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:MAC:CYCLe:TTI<ms>
CONFigure:WCDMa:SIGN<i>:CELL:CPC:MAC:CYCLe:TTI<ms> 
<Pattern>
Pattern where the start of uplink E-DCH transmission after inactivity is allowed, see 
"Continuous Packet Connectivity (CPC)"
.
Suffix: 
<ms>
2, 10
Parameters:
<Pattern>
Only the following values are allowed (in subframes):
5 | 10 | 20 for 10 ms TTI
1 | 4 | 5 | 8 | 10 | 16 | 20 for 2 ms TTI
If you enter another value, the nearest allowed value is set instead.
Range: 
1 Subframe  to  20 Subframe
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
"MAC DTX Cycle"
Top