# CONFigureLTESIGNiCBSMESSageIDTYpe

Module: LTE Signaling
Source: b21e31469645405b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (CBS)
 > 
CONFigure:LTE:SIGN<i>:CBS:MESSage:IDTYpe
CONFigure:LTE:SIGN<i>:CBS:MESSage:IDTYpe 
<Type>
Selects the message type. The related message ID is set automatically.
For user-defined CMAS/ETWS, specify the message ID via 
CONFigure:
​
LTE:
​
SIGN<i>:
​
CBS:
​
MESSage:
​
ID
.
Parameters:
<Type>
APResidentia |
 
 AEXTreme |
 
 ASEVere |
 
 AAMBer |
 
 EARThquake |
 
 TSUNami |
 
 ETWarning |
 
 ETWTest |
 
 UDCMas |
 
 UDETws
APResidentia
: presidential alert
AEXTreme
: extreme alert
ASEVere
: severe alert
AAMBer
: amber alert
EARThquake
: earthquake
TSUNami
: tsunami
ETWarning
: earthquake + tsunami
ETWTest
: ETWS test
UDCMas
: user-defined CMAS
UDETws
: user-defined ETWS
*RST:
APR
Example: 
See 
"Configuring the Cell Broadcast Service"
Firmware/Software: 
V3.5.40, V3.5.50 added UDEFined, UDETws
Options: 
R&S CMW-KS170
Manual operation: 
See 
"ID"
Top