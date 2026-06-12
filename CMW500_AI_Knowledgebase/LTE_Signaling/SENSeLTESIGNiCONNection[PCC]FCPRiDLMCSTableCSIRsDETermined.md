# SENSeLTESIGNiCONNection[PCC]FCPRiDLMCSTableCSIRsDETermined

Module: LTE Signaling
Source: cf3cb45b6f8c4d2a.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI-PMI-RI Settings
 > 
SENSe:LTE:SIGN<i>:CONNection[:PCC]:FCPRi:DL:MCSTable:CSIRs:DETermined?
SENSe:LTE:SIGN<i>:CONNection[:PCC]:FCPRi:DL:MCSTable:CSIRs:DETermined? 
SENSe:LTE:SIGN<i>:CONNection:SCC<c>:FCPRi:DL:MCSTable:CSIRs:DETermined? 
Queries the automatically determined mapping table for subframes with CSI-RS. The table is used for the scheduling type "Follow WB CQI-PMI-RI" if the table mode is set to 
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
V3.5.40
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Follow WB CQI-PMI-RI"
Top