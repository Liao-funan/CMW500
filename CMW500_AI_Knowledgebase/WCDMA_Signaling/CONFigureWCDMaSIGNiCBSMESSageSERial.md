# CONFigureWCDMaSIGNiCBSMESSageSERial

Module: WCDMA Signaling
Source: ba86dff2716d425b.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Cell Broadcast Service Settings
 > 
CONFigure:WCDMa:SIGN<i>:CBS:MESSage:SERial
CONFigure:WCDMa:SIGN<i>:CBS:MESSage:SERial 
<GeoScope>, <MessageCode>, <AutoIncr>[, <UpdateNumber>]
Specifies the unique CB message identification.
Parameters:
<GeoScope>
CIMMediate |
 
 PLMN |
 
 SERVice |
 
 CNORmal
The geographical area over which the message code is unique.
CIMMediate
: cell-wide, immediate display
PLMN
: PLMN wide
SERVice
: service area wide
CNORmal
: cell-wide, normal display
*RST:
CIMM
<MessageCode>
CB message identification
Range: 
0  to  1023
*RST:
0
<AutoIncr>
OFF |
 
 ON
OFF
: no increase of 
<UpdateNumber>
 upon a CB message change
ON
: increase 
<UpdateNumber>
 automatically upon a CB message change
*RST:
OFF
<UpdateNumber>
Indication of a content change of the same CB message
Range: 
0  to  15
*RST:
0
Example: 
See 
"Sending a Cell Broadcast Message"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS170
Manual operation: 
See 
"Serial Number"
Top