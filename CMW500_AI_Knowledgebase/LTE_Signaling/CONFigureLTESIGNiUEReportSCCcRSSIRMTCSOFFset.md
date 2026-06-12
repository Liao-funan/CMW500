# CONFigureLTESIGNiUEReportSCCcRSSIRMTCSOFFset

Module: LTE Signaling
Source: 81fcc47c7b494ccc.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
UE Measurement Report Settings
 > 
CONFigure:LTE:SIGN<i>:UEReport:SCC<c>:RSSI:RMTC:SOFFset
CONFigure:LTE:SIGN<i>:UEReport:SCC<c>:RSSI:RMTC:SOFFset 
<Offset>
Specifies the offset of UE measurements for LAA.
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
RSSI:
​
RMTC:
​
PERiod
.
Suffix: 
<c>
1..4
Parameters:
<Offset>
Range: 
0 ms  to  635 ms
Increment: 
5 ms
*RST:
20 ms
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
"RMTC Period, RMTC Subframe Offset, Measurement Duration"
Top