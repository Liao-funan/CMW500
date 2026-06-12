# CONFigureLTESIGNi[PCC]EMTCCELEVelENABle

Module: LTE Signaling
Source: ae22e2b24bdc4944.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
eMTC Settings
 > 
CE Settings
 > 
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:ENABle
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:ENABle 
<Level>, <Enable>
CONFigure:LTE:SIGN<i>[:PCC]:EMTC:CE:LEVel:ENABle? 
<Level>
Selects whether the eNodeB supports a certain CE level.
If you disable a CE level, the higher CE levels are disabled automatically. You can enable a CE level only if all lower CE levels are enabled.
Parameters:
<Enable>
OFF |
 
 ON
Disables or enables the selected CE <Level>
*RST:
ON
Parameters for setting and query: 
<Level>
Selects a CE level
Range: 
1  to  3
Example: 
See 
"Configuring eMTC Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS590
Manual operation: 
See 
"Enable"
Top