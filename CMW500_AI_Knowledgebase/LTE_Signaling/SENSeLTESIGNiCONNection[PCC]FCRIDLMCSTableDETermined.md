# SENSeLTESIGNiCONNection[PCC]FCRIDLMCSTableDETermined

Module: LTE Signaling
Source: 0eff1b2ac512447b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI-RI Settings
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:FCRI:DL:MCSTable:DETermined?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:FCRI:DL:MCSTable:DETermined? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:FCRI:DL:MCSTable:DETermined? 
Queries the automatically determined mapping table. The table is used for the scheduling type "Follow WB CQI-RI" if the table mode is set to 
DETermined
.
Suffix: 
<c>
1..4
Return values: 
<MCS>
Comma-separated list of 15 MCS values, for reported CQI index value 1 to 15
Range: 
0  to  31
Usage: 
Query only
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Follow WB CQI-RI"
Top