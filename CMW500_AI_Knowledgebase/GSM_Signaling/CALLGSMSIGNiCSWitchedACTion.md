# CALLGSMSIGNiCSWitchedACTion

Module: GSM Signaling
Source: a2a2a15307594ecd.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
CALL:GSM:SIGN<i>:CSWitched:ACTion
CALL:GSM:SIGN<i>:CSWitched:ACTion 
<CSAction>
Controls the setup and release of a circuit switched GSM connection or sends a short message to the MS.
To query the current CS connection state, see 
FETCh:
​
GSM:
​
SIGN<i>:
​
CSWitched:
​
STATe?
.
For background information concerning the state model, see 
"Connection States"
.
Setting parameters: 
<CSAction>
CONNect |
 
 DISConnect |
 
 SMS |
 
 HANDover
Example: 
See 
"Setting Up a CS Connection"
Usage: 
Event
Firmware/Software: 
V1.0.15.0
V2.0.10: added SMS
V3.2.20: added HANDover
Manual operation: 
See 
"Connect / Disconnect / Send SMS / Release PDP Context (hotkeys)"
Top