# SENSeLTESIGNiCONNectionETHRoughputDL[PCC]STReams

Module: LTE Signaling
Source: 5fbdc31bf1b74094.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
General Scheduling Commands
 > 
SENSe:LTE:SIGN<i>:CONNection:ETHRoughput:DL[:PCC]:STReam<s>?
SENSe:LTE:SIGN<i>:CONNection:ETHRoughput:DL[:PCC]:STReam<s>? 
SENSe:LTE:SIGN<i>:CONNection:ETHRoughput:DL:SCC<c>:STReam<s>? 
Returns the expected maximum throughput (averaged over one frame) for one DL stream of one component carrier. The throughput is calculated for the currently selected scheduling type.
Suffix: 
<s>
1..2
<c>
1..4
Return values: 
<Throughput>
Default unit: 
Mbit/s
Example: 
See 
"Configuring User-Defined Channels"
Usage: 
Query only
Firmware/Software: 
V3.0.20, SCC command V3.2.50
Manual operation: 
See 
"Throughput"
Top