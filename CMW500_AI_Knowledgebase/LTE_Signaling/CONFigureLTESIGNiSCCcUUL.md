# CONFigureLTESIGNiSCCcUUL

Module: LTE Signaling
Source: a3d046ea78144469.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
General Settings
 > 
CONFigure:LTE:SIGN<i>:SCC<c>:UUL
CONFigure:LTE:SIGN<i>:SCC<c>:UUL 
<UseUplink>[, <SCCRXConnector>, <SCCRXConverter>]
Activates the uplink for the SCC number <c> and optionally selects the signal path.
For possible connector and converter values, see 
"Values for Signal Path Selection"
.
Suffix: 
<c>
1..4
Parameters:
<UseUplink>
OFF |
 
 ON
*RST:
OFF
<SCCRXConnector>
RF connector for the SCC input path
<SCCRXConverter>
RX module for the SCC input path
Example: 
See 
"Specifying General Settings"
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS512
Manual operation: 
See 
"Use UL"
Top