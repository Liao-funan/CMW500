# CONFigureLTESIGNiCELL[PCC]SRSBWConfig

Module: LTE Signaling
Source: 5b436348d52a4294.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Physical Cell Setup
 > 
SRS Settings
 > 
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SRS:BWConfig
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SRS:BWConfig 
<BWConfiguration>
CONFigure:LTE:SIGN<i>:CELL:SCC<c>:SRS:BWConfig 
<BWConfiguration>
Specifies the "srs-BandwidthConfig" value.
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
<BWConfiguration>
Range: 
0  to  7
*RST:
7
Example: 
See 
"Configuring Physical Cell Setup"
Firmware/Software: 
V3.5.40, SCC command V3.7.10
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Bandwidth Config (Common)"
Top