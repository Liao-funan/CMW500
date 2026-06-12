# CONFigureLTESIGNiCBSMESSageSERial

Module: LTE Signaling
Source: 8dc2c189812b4c72.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (CBS)
 > 
CONFigure:LTE:SIGN<i>:CBS:MESSage:SERial
CONFigure:LTE:SIGN<i>:CBS:MESSage:SERial 
<GeoScope>, <MessageCode>, <AutoIncr>[, <UpdateNumber>]
Specifies the serial number, consisting of the geographical scope, the message code and the update number.
Parameters:
<GeoScope>
CIMMediate |
 
 PLMN |
 
 LOCation |
 
 CNORmal
Geographical scope
CIMMediate
: cell immediate
PLMN
: PLMN normal
LOCation
: tracking area normal
CNORmal
: cell normal
*RST:
CIMM
<MessageCode>
Range: 
0  to  1023
*RST:
0
<AutoIncr>
OFF |
 
 ON
OFF
: 
<UpdateNumber>
 is not changed automatically
ON
: 
<UpdateNumber>
 is increased if message is changed
*RST:
OFF
<UpdateNumber>
Range: 
0  to  15
*RST:
0
Example: 
See 
"Configuring the Cell Broadcast Service"
Firmware/Software: 
V3.5.40
Options: 
R&S CMW-KS170
Manual operation: 
See 
"Serial Number"
Top