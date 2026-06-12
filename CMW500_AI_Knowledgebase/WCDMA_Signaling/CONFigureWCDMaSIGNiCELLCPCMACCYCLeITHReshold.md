# CONFigureWCDMaSIGNiCELLCPCMACCYCLeITHReshold

Module: WCDMA Signaling
Source: c9420fb912064048.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
E-DCH TX Start Time Restriction
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:MAC:CYCLe:ITHReshold
CONFigure:WCDMa:SIGN<i>:CELL:CPC:MAC:CYCLe:ITHReshold 
<Threshold>
Restricts the starting points of the uplink transmission on E-DCH for a particular UE.
E-DCH inactivity time after which the UE can start E-DCH transmission only at given times, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<Threshold>
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
Values in E-DCH TTIs, additional OFF | ON disables | enables the threshold
If you enter another value, the nearest allowed value is set instead.
Range: 
1 E-DCH TTI  to  512 E-DCH TTI
*RST:
8 E-DCH TTI
Default unit: 
E-DCH TTI
Example: 
See 
"Configuring and Executing CPC"
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS413
Manual operation: 
See 
"MAC Inactivity Threshold"
Top