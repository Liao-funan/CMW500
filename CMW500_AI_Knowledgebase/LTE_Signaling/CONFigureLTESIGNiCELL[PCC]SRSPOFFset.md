# CONFigureLTESIGNiCELL[PCC]SRSPOFFset

Module: LTE Signaling
Source: d08172ba1dec43f5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Physical Cell Setup
 > 
SRS Settings
 > 
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SRS:POFFset
CONFigure:LTE:SIGN<i>:CELL[:PCC]:SRS:POFFset 
<Offset>
CONFigure:LTE:SIGN<i>:CELL:SCC<c>:SRS:POFFset 
<Offset>
Specifies the "pSRS-Offset" value.
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
A query returns <Offset>, <Value>.
Suffix: 
<c>
1..7
Parameters:
<Offset>
"pSRS-Offset" value
Range: 
0  to  15
*RST:
3
Return values: 
<Value>
Offset in dB, corresponding to the configured "pSRS-Offset" value
Range: 
-10.5 dB  to  12 dB
*RST:
-6 dB
Default unit: 
dB
Example: 
See 
"Configuring Physical Cell Setup"
Options: 
R&S CMW-KS510
Manual operation: 
See 
"pSRS-Offset"
Top