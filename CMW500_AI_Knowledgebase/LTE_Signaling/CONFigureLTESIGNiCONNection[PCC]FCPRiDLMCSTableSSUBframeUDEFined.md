# CONFigureLTESIGNiCONNection[PCC]FCPRiDLMCSTableSSUBframeUDEFined

Module: LTE Signaling
Source: d2f2069adda344be.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI-PMI-RI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCPRi:DL:MCSTable:SSUBframe:UDEFined
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCPRi:DL:MCSTable:SSUBframe:UDEFined 
<MCS>(15)
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FCPRi:DL:MCSTable:SSUBframe:UDEFined 
<MCS>(15)
Configures a user-defined mapping table for special subframes that assigns an MCS index value to each possible reported wideband CQI index value.
The table is used for the scheduling type "Follow WB CQI-PMI-RI" if the table mode is set to 
UDEFined
.
Suffix: 
<c>
1..4
Parameters:
<MCS>
Comma-separated list of 15 MCS values, for reported CQI index value 1 to 15
Range: 
0  to  28
*RST:
0, 1, 3, 5, 7, 10, 12, 14, 17, 19, 21, 22, 24, 25, 25
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Follow WB CQI-PMI-RI"
Top