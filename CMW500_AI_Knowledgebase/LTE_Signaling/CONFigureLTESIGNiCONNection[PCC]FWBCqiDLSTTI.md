# CONFigureLTESIGNiCONNection[PCC]FWBCqiDLSTTI

Module: LTE Signaling
Source: b2728b584ed24c50.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Configuration
 > 
Follow WB CQI Settings
 > 
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FWBCqi:DL:STTI
CONFigure:LTE:SIGN<i>:CONNection[:PCC]:FWBCqi:DL:STTI 
<Scheduled>...
CONFigure:LTE:SIGN<i>:CONNection:SCC<c>:FWBCqi:DL:STTI 
<Scheduled>...
Configures which subframes are scheduled for the DL of the scheduling type "Follow WB CQI".
For most subframes, the setting is fixed, depending on the duplex mode and the UL-DL configuration. For these subframes, your setting is ignored.
Suffix: 
<c>
1..4
Parameters:
<Scheduled>
OFF |
 
 ON
Comma-separated list of 10 values, for subframe 0 to 9
Example: 
See 
"Configuring CQI DL Channels"
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS510/-KS512 (without CA/with CA)
Manual operation: 
See 
"Scheduled CQI"
Top