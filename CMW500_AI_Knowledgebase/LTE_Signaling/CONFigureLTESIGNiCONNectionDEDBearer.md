# CONFigureLTESIGNiCONNectionDEDBearer

Module: LTE Signaling
Source: 0f3d86e14b0f4b8e.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
Connect/Disconnect Preparation
 > 
CONFigure:LTE:SIGN<i>:CONNection:DEDBearer
CONFigure:LTE:SIGN<i>:CONNection:DEDBearer 
<ID>
Selects a dedicated bearer as a preparation for a bearer release via 
CALL:LTE:SIGN:PSWitched:ACTion DISConnect
.
Parameters:
<ID>
Dedicated bearer ID as string
String example: "6 (->5, Voice)"
To query a list of IDs for all established dedicated bearers, see 
CATalog:
​
LTE:
​
SIGN<i>:
​
CONNection:
​
DEDBearer?
.
Example: 
See 
"Connecting/Releasing Dedicated Bearers"
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS510
Manual operation: 
See 
"Disconnect"
Top