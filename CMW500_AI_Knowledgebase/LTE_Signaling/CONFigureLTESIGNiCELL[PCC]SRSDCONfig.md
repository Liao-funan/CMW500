# CONFigureLTESIGNiCELL[PCC]SRSDCONfig

Module: LTE Signaling
Source: 673eca7c00b4458c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Physical Cell Setup
 > 
SRS Settings
 > 
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SRS:DCONfig
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SRS:DCONfig 
<DConfiguration>
CONFigure:LTE:SIGN<i>:CELL:SCC<c>:SRS:DCONfig 
<DConfiguration>
Selects whether the UE-specific SRS parameters are signaled to the UE or not.
The setting is only used if manual configuration is enabled, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CELL[:
​
PCC]:
​
SRS:
​
MCENable
.
Suffix: 
<c>
1..7
Parameters:
<DConfiguration>
OFF |
 
 ON
OFF
: send only cell-specific SRS parameters
ON
: send also UE-specific SRS parameters
*RST:
ON
Example: 
See 
"Configuring Physical Cell Setup"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Dedicated Configuration"
Top