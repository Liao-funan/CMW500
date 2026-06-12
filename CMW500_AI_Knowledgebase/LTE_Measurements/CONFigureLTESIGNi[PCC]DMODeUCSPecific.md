# CONFigureLTESIGNi[PCC]DMODeUCSPecific

Module: LTE Measurements
Source: b20b9652b5ca4000.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for General Measurement Settings
 > 
CONFigure:LTE:SIGN<i>[:PCC]:DMODe:UCSPecific
CONFigure:LTE:SIGN<i>[:PCC]:DMODe:UCSPecific 
<Enable>
Enables the carrier-specific duplex mode configuration.
Enabled - The duplex mode is configured per carrier via:
CONFigure:
​
LTE:
​
SIGN<i>[:
​
PCC]:
​
DMODe
CONFigure:
​
LTE:
​
SIGN<i>:
​
SCC<c>:
​
DMODe
Disabled - All carriers have the same duplex mode, configured via:
CONFigure:
​
LTE:
​
SIGN<i>[:
​
PCC]:
​
DMODe
Parameters:
<Enable>
OFF |
 
 ON
*RST:
OFF
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Duplex Mode"
Top