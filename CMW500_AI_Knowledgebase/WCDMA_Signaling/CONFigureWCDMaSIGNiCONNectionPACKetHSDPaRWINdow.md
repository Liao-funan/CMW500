# CONFigureWCDMaSIGNiCONNectionPACKetHSDPaRWINdow

Module: WCDMA Signaling
Source: d5027101e57765.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Packet Data Settings
 > 
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:HSDPa:RWINdow
CONFigure:WCDMa:SIGN<i>:CONNection:PACKet:HSDPa:RWINdow 
<Mode>[, <ReceivingWindow>]
Specifies the size of the receiver window in the UE.
Parameters:
<Mode>
AUTO |
 
 MANual
Automatic calculation | manual configuration of the window size
*RST:
AUTO
<ReceivingWindow>
Manually configured window size applicable to <Mode> = MANual
The value is rounded to the nearest of the following values:
1 | 8 | 16 | 32 | 64 | 128 | 256 | 512 | 768 | 1024 | 1536 | 2047 | 2560 | 3072 | 3584 | 4095
Range: 
1  to  4095
*RST:
2047
Example: 
See 
"Configuring Connection Types"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Receiving Window Size"
Top