# SENSeLTESIGNiCONNection[PCC]FWBCqiDLMCSTableSSUBframeDETermined

Module: LTE Signaling
Source: 44b58aac3123411c.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI Settings
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:FWBCqi:DL:MCSTable:SSUBframe:DETermined?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:FWBCqi:DL:MCSTable:SSUBframe:DETermined? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:FWBCqi:DL:MCSTable:SSUBframe:DETermined? 
Queries the automatically determined mapping table for special subframes. The table is used for the scheduling type "Follow WB CQI" if the table mode is set to 
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
V3.5.50
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Follow WB CQI"
Top