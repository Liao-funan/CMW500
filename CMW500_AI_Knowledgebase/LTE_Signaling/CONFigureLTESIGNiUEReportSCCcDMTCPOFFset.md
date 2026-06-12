# CONFigureLTESIGNiUEReportSCCcDMTCPOFFset

Module: LTE Signaling
Source: dad7632bbba047e1.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Measurement Report Settings
 > 
CONFigure:LTE:SIGN<i>:UEReport:SCC<c>:DMTC:POFFset
CONFigure:LTE:SIGN<i>:UEReport:SCC<c>:DMTC:POFFset 
<Offset>
Specifies the offset of the DRS for LAA.
The offset must be at least 5 ms smaller than the configured periodicity, see 
CONFigure:
​
LTE:
​
SIGN<i>:
​
UEReport:
​
SCC<c>:
​
DMTC:
​
PERiod
.
Suffix: 
<c>
1..4
Parameters:
<Offset>
Range: 
0 ms  to  155 ms
Increment: 
5 ms
*RST:
0 ms
Default unit: 
ms
Example: 
See 
"Configuring LAA Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS514
Manual operation: 
See 
"DMTC Configuration"
Top