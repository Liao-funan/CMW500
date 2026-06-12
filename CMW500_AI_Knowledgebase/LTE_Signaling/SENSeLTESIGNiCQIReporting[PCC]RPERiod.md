# SENSeLTESIGNiCQIReporting[PCC]RPERiod

Module: LTE Signaling
Source: 41276c25cd9c47a3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
CQI Reporting Settings
 > 
SENSe:LTE:SIGN<i>:CQIReporting[:PCC]:RPERiod?
SENSe:LTE:SIGN<i>:CQIReporting[:PCC]:RPERiod? 
SENSe:LTE:SIGN<i>:CQIReporting:SCC<c>:RPERiod? 
Queries the reporting period N
p
 in subframes, resulting from the configured "cqi-pmi-ConfigIndex".
Suffix: 
<c>
1..4
Return values: 
<Period>
Range: 
1  to  160
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