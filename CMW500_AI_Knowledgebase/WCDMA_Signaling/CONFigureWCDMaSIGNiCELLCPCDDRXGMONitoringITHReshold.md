# CONFigureWCDMaSIGNiCELLCPCDDRXGMONitoringITHReshold

Module: WCDMA Signaling
Source: d5027101e66166.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Continuous Packet Connectivity
 > 
Downlink DRX
 > 
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DDRX:GMONitoring:ITHReshold
CONFigure:WCDMa:SIGN<i>:CELL:CPC:DDRX:GMONitoring:ITHReshold 
<Threshold>
Number of subframes after uplink activity when UE has to monitor E-AGCH/E-RGCH, see 
"Continuous Packet Connectivity (CPC)"
.
Parameters:
<Threshold>
Only the following values are allowed (in E-DCH TTIs):
1 | 2 | 4 | 8 | 16 |
32 | 64   | 128 | 256
If you enter another value, the nearest allowed value is set instead.
Range: 
1 E-DCH TTI  to  256 E-DCH TTI
*RST:
1 E-DCH TTI
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