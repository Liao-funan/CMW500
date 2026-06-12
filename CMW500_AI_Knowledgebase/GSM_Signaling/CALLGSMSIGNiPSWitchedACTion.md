# CALLGSMSIGNiPSWitchedACTion

Module: GSM Signaling
Source: 8c9767ee2ddd4026.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
CALL:GSM:SIGN<i>:PSWitched:ACTion
CALL:GSM:SIGN<i>:PSWitched:ACTion 
<PSAction>
Controls the setup and release of a packet switched GSM connection. The command initiates a transition between different connection states; to be queried via 
FETCh:
​
GSM:
​
SIGN<i>:
​
PSWitched:
​
STATe?
. For details, refer to 
"Connection States"
.
Setting parameters: 
<PSAction>
CONNect |
 
 DISConnect |
 
 SMS |
 
 RPContext |
 
 HANDover
Connect, disconnect, send SMS, release PDP context, handover command for cell change order
Example: 
See 
"Setting Up a PS Connection"
Usage: 
Event
Firmware/Software: 
V2.0.20
V3.2.20: added 
SMS
V3.2.70: added 
RPContext
V3.7.10: added 
HANDover
Manual operation: 
See 
"Connect / Disconnect / Send SMS / Release PDP Context (hotkeys)"
Top