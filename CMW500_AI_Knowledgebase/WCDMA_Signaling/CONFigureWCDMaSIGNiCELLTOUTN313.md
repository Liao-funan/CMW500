# CONFigureWCDMaSIGNiCELLTOUTN313

Module: WCDMA Signaling
Source: accfff574db841f0.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Timer and Constants
 > 
CONFigure:WCDMa:SIGN<i>:CELL:TOUT:N313
CONFigure:WCDMa:SIGN<i>:CELL:TOUT:N313 
<Value>
Sets a maximum value for counter N313.
The UE counts successive "out of sync" indications received from layer 1. When the maximum value is reached, the UE considers a "radio link failure" condition and a connection release.
Parameters:
<Value>
N1 |
 
 N2 |
 
 N4 |
 
 N10 |
 
 N20 |
 
 N50 |
 
 N100 |
 
 N200
Maximum counter value prefixed by N.
*RST:
N20
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V1.0.15.0
Options: 
R&S CMW-KS410
Manual operation: 
See 
"N313"
Top