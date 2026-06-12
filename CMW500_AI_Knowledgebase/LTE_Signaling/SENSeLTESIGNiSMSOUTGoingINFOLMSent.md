# SENSeLTESIGNiSMSOUTGoingINFOLMSent

Module: LTE Signaling
Source: 82b24992dc1a4f2b.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
SENSe:LTE:SIGN<i>:SMS:OUTGoing:INFO:LMSent?
SENSe:LTE:SIGN<i>:SMS:OUTGoing:INFO:LMSent? 
Queries whether the last outgoing short message transfer was successful or not.
Return values: 
<LastMessageSent>
SUCCessful |
 
 FAILed |
 
 NAV
NAV is returned during an outgoing short message transfer and if there has been no transfer since the cell was switched on / the session has been started.
Example: 
See 
"Sending / Receiving a Short Message"
Usage: 
Query only
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Last Message Sent"
Top