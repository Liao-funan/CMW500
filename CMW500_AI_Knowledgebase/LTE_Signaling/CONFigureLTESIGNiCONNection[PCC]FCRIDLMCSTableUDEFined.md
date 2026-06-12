# CONFigureLTESIGNiCONNection[PCC]FCRIDLMCSTableUDEFined

Module: LTE Signaling
Source: caf1ddd786f247f5.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI-RI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCRI:DL:MCSTable:UDEFined
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FCRI:DL:MCSTable:UDEFined 
<MCS>(15)
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FCRI:DL:MCSTable:UDEFined 
<MCS>(15)
Configures a user-defined mapping table that assigns an MCS index value to each possible reported wideband CQI index value.
The table is used for the scheduling type "Follow WB CQI-RI" if the table mode is set to 
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
0, 1, 2, 3, 5, 7, 9, 12, 14, 16, 19, 22, 24, 27, 28
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Follow WB CQI-RI"
Top