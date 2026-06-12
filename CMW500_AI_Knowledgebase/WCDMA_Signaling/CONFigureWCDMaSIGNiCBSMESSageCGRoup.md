# CONFigureWCDMaSIGNiCBSMESSageCGRoup

Module: WCDMA Signaling
Source: a2ab8795e24a4c86.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Cell Broadcast Service Settings
 > 
CONFigure:WCDMa:SIGN<i>:CBS:MESSage:CGRoup?
CONFigure:WCDMa:SIGN<i>:CBS:MESSage:CGRoup? 
Queries the coding group to be indicated to the CB message recipient.
The coding group is defined in 3GPP TS 23.038, section 5 as bits 4 to 7 of CBS data coding scheme.
Return values: 
<CodingGroup>
0
: used for internal messages (
"Data Source"
 = "Use Internal")
1
: used for CBS files (only language = 1: UCS2 is supported)
Range: 
0  to  1
Example: 
See 
"Sending a Cell Broadcast Message"
Usage: 
Query only
Firmware/Software: 
V3.5.30
Options: 
R&S CMW-K170
Manual operation: 
See 
"Data Coding Scheme"
Top