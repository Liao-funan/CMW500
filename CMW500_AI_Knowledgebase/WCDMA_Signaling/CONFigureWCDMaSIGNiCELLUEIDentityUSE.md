# CONFigureWCDMaSIGNiCELLUEIDentityUSE

Module: WCDMA Signaling
Source: a790559b0a2e4334.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
UE Identity
 > 
CONFigure:WCDMa:SIGN<i>:CELL:UEIDentity:USE
CONFigure:WCDMa:SIGN<i>:CELL:UEIDentity:USE 
<Enable>
Specifies whether the default IMSI is used. The default IMSI is defined via 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
UEIDentity:
​
IMSI
.
You can only enable the default IMSI but not disable it. Instead it is disabled automatically when registration is performed with a different IMSI.
Parameters:
<Enable>
ON
*RST:
ON
Example: 
See 
"Configuring Network Settings"
Firmware/Software: 
V1.0.15.0
V2.0.10: value OFF removed
Manual operation: 
See 
"In Use"
Top