# CONFigureWCDMaSIGNiCELLHSUPaHBDConition

Module: WCDMA Signaling
Source: fcd80f24c49e48a5.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:HBDConition
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:HBDConition 
<Delay>
Specifies the happy bit delay condition value signaled to the UE.
Parameters:
<Delay>
Only the following values are allowed (in ms):
2 | 10 | 20 | 50 | 100 |
200 | 500 | 1000
If you enter another value, the nearest allowed value is set instead.
Range: 
2 ms  to  1000 ms
*RST:
100 ms
Default unit: 
ms
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Happy Bit Delay Condition"
Top