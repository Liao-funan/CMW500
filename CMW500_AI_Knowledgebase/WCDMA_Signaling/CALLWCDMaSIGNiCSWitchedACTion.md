# CALLWCDMaSIGNiCSWitchedACTion

Module: WCDMA Signaling
Source: d5027101e38620.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
CALL:WCDMa:SIGN<i>:CSWitched:ACTion
CALL:WCDMa:SIGN<i>:CSWitched:ACTion 
<CSAction>
Controls the CS connection state. As a prerequisite for connection setup the DL signal has to be switched on, see 
SOURce:
​
WCDMa:
​
SIGN<i>:
​
CELL:
​
STATe
.
Setting parameters: 
<CSAction>
CONNect |
 
 DISConnect |
 
 SSMS |
 
 UNRegister |
 
 HANDover
CONNect
: Initiate a CS connection setup
DISConnect
: Release a CS connection
SSMS
: Send SMS
UNRegister
: Unregister the UE completely (CS unregister and PS detach), i.e. change to state "On"
HANDover
: Initiate a handover
Example: 
See 
"Setting Up a CS Connection (Signaling)"
Usage: 
Event
Firmware/Software: 
V1.0.15.0
V1.0.15.23: added HANDover
V2.0.10: added SSMS
Manual operation: 
See 
"Connection Control Hotkeys"
Top