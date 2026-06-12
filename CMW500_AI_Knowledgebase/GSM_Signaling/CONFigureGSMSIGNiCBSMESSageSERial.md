# CONFigureGSMSIGNiCBSMESSageSERial

Module: GSM Signaling
Source: d1180591dae64ddb.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Messaging (CBS)
 > 
CONFigure:GSM:SIGN<i>:CBS:MESSage:SERial
CONFigure:GSM:SIGN<i>:CBS:MESSage:SERial 
<GeoScope>, <MessageCode>, <AutoIncr>[, <UpdateNumber>]
Specifies the unique CB message identification.
Parameters:
<GeoScope>
CIMMediate |
 
 PLMN |
 
 LOCation |
 
 CNORmal
The geographical area over which the message code is unique.
CIMMediate
: cell-wide, immediate display
PLMN
: PLMN-wide, normal display
LOCation
: location area-wide, normal display
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
V3.5.20
Options: 
R&S CMW-KS170
Manual operation: 
See 
"Serial Number"
Top