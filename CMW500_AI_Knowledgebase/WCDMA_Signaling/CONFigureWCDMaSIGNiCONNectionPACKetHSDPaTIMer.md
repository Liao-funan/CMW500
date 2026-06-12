# CONFigureWCDMaSIGNiCONNectionPACKetHSDPaTIMer

Module: WCDMA Signaling
Source: 254119dc9540404b.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Packet Data Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:HSDPa:TIMer
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:HSDPa:TIMer 
<Mode>[, <T1ReleaseTimer>]
Specifies the timeout value of the reordering release timer T1.
Parameters:
<Mode>
AUTO |
 
 MANual
Automatic calculation | manual configuration of the timeout value
*RST:
AUTO
<T1ReleaseTimer>
Manually configured value applicable to <Mode> = MANual
The value is rounded to the nearest of the following values in s:
0.01 | 0.02 | 0.03 … 0.1 | 0.12 | 0.14 | 0.16 | 0.2 | 0.3 | 0.4
Range: 
0.01 s  to  0.4 s
*RST:
0.05 s
Default unit: 
s
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"T1 Release Timer"
Top