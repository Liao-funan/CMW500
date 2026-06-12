# SENSeLTESIGNiCQIReporting[PCC]ROFFset

Module: LTE Signaling
Source: 5d4164fc04454a63.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
CQI Reporting Settings
 > 
SENSe:LTE:SIGN<i>:CQIReporting[:PCC]:ROFFset?
SENSe:LTE:SIGN<i>:CQIReporting[:PCC]:ROFFset? 
SENSe:LTE:SIGN<i>:CQIReporting:SCC<c>:ROFFset? 
Queries the reporting offset N
OFFSET,CQI
 in subframes, resulting from the configured "cqi-pmi-ConfigIndex".
Suffix: 
<c>
1..4
Return values: 
<Offset>
Range: 
0  to  159
Example: 
See 
"Configuring CQI Reporting"
Usage: 
Query only
Firmware/Software: 
V3.0.10, SCC command V3.2.70
Options: 
R&S CMW-KS510 for scenarios without carrier aggregation
R&S CMW-KS512 for scenarios with carrier aggregation
Manual operation: 
See 
"CQI/PMI Reporting Period / Offset"
Top