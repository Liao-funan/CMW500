# CALLLTESIGNiSCCcACTion

Module: LTE Signaling
Source: 9354a22567a44c9e.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
CALL:LTE:SIGN<i>:SCC<c>:ACTion
CALL:LTE:SIGN<i>:SCC<c>:ACTion 
<SCCAction>
Controls the state of the secondary component carrier (SCC) number <c>.
Suffix: 
<c>
1..4
Setting parameters: 
<SCCAction>
OFF |
 
 ON |
 
 RRCadd |
 
 MACactivate |
 
 MACDeactivat |
 
 RRCDelete
OFF:
 Switch off SCC
ON:
 Switch on SCC
RRCadd:
 Add SCC RRC connection
MACactivate:
 Activate MAC for the SCC
MACDeactivat:
 Deactivate MAC for the SCC
RRCDelete:
 Delete SCC RRC connection
Usage: 
Event
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Connection control hotkeys"
Top