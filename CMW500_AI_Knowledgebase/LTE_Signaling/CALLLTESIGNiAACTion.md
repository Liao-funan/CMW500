# CALLLTESIGNiAACTion

Module: LTE Signaling
Source: 4fd35da3b45f4b5a.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
CALL:LTE:SIGN<i>:A:ACTion
CALL:LTE:SIGN<i>:A:ACTion 
<SCCAction>
CALL:LTE:SIGN<i>:B:ACTion 
<SCCAction>
Control the state of all SCCs assigned to the synchronization set A or B.
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
V3.7.10
Manual operation: 
See 
"Connection control hotkeys"
Top