# SENSeLTESIGNiSMSINFOLRMessageRFLag

Module: LTE Signaling
Source: d35e97296.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
SENSe:LTE:SIGN<i>:SMS:INFO:LRMessage:RFLag?
SENSe:LTE:SIGN<i>:SMS:INFO:LRMessage:RFLag? 
Queries the "message read" flag for the last received message.
The flag is true (ON) in the following cases:
No SMS message has been received.
The last received SMS message has been read, see 
SENSe:
​
LTE:
​
SIGN<i>:
​
SMS:
​
INComing:
​
INFO:
​
MTEXt?
.
The last received SMS message has been deleted, see 
CLEan:
​
LTE:
​
SIGN<i>:
​
SMS:
​
INComing:
​
INFO:
​
MTEXt
.
Return values: 
<LastRecMessRead>
OFF |
 
 ON
OFF
: unread message available
ON
: no unread message available
*RST:
ON
Example: 
See 
"Sending / Receiving a Short Message"
Usage: 
Query only
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"Clear Message Text"
Top