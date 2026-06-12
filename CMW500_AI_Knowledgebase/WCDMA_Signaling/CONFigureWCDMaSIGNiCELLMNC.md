# CONFigureWCDMaSIGNiCELLMNC

Module: WCDMA Signaling
Source: bc25f18c91aa4b30.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Network Identity Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:MNC
CONFigure:WCDMa:SIGN<i>:CELL:MNC 
<Value>[, <NrOfDigits>]
Specifies the mobile network code (MNC). A two or three-digit MNC can be set. Leading zeros can be omitted.
Parameters:
<Value>
Range: 
0  to  99 or 999 depending on <NrOfDigits>
*RST:
1
<NrOfDigits>
D2 |
 
 D3
D2
: two-digit MNC
D3
: three-digit MNC
*RST:
D2
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"MNC"
Top