# CONFigureWCDMaSIGNiCELLHSUPaMCCode

Module: WCDMA Signaling
Source: 2242d5b91bfc4c38.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSUPA Settings
 > 
Miscellaneous Settings
 > 
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:MCCode
CONFigure:WCDMa:SIGN<i>:CELL:HSUPa:MCCode 
<Code>
Specifies the maximum channelization codes value signaled to the UE. Depending on several other HSUPA parameters, e.g. the UE category, only a subset of values is allowed.
Parameters:
<Code>
S64 |
 
 S32 |
 
 S16 |
 
 S8 |
 
 S4 |
 
 S24 |
 
 S22 |
 
 S224
S64, S32, S16, S8, S4
: one code, SF 64 to SF 4
S24
: two codes, SF 4
S22
: two codes, SF 2
S224
: four codes, two with SF 2 and two with SF 4
*RST:
S224
Example: 
See 
"Configuring HSUPA Settings"
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"Maximum Channelization Code"
Top