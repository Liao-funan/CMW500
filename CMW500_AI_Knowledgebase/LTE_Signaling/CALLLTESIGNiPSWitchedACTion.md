# CALLLTESIGNiPSWitchedACTion

Module: LTE Signaling
Source: 6e89dc8645b44cfe.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
General Commands
 > 
CALL:LTE:SIGN<i>:PSWitched:ACTion
CALL:LTE:SIGN<i>:PSWitched:ACTion 
<PSAction>
Controls the PS connection state. As a prerequisite, the DL signal must be switched on, see 
SOURce:
​
LTE:
​
SIGN<i>:
​
CELL:
​
STATe
.
Setting parameters: 
<PSAction>
CONNect |
 
 DISConnect |
 
 SMS |
 
 DETach |
 
 HANDover
CONNect
: Initiate a mobile-terminated connection setup
DISConnect
: Release the connection
SMS
: Send an SMS
DETach
: Detach the UE
HANDover
: Initiate a handover (within the LTE signaling application or to another signaling application)
Example: 
See 
"Setting Up a Test Mode Connection"
Usage: 
Event
Firmware/Software: 
V2.1.20
V3.0.10: added DETach and HANDover
Manual operation: 
See 
"Connection control hotkeys"
Top