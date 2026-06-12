# SENSeWCDMaSIGNiSMSINFOLRMessageRFLag

Module: WCDMA Signaling
Source: d5027101e68255.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
SENSe:WCDMa:SIGN<i>:SMS:INFO:LRMessage:RFLag?
SENSe:WCDMa:SIGN<i>:SMS:INFO:LRMessage:RFLag? 
Queries the "message read" flag for the last received message.
The flag is true (ON) in the following cases:
No SMS message has been received.
The last received SMS message has been read, see 
SENSe:
​
WCDMa:
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
WCDMa:
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
"Sending / Receiving a Short Message (Signaling)"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Top