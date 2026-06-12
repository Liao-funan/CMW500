# SENSeGSMSIGNiSMSINFOLRMessageRFLag

Module: GSM Signaling
Source: d35e36698.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
SENSe:GSM:SIGN<i>:SMS:INFO:LRMessage:RFLag?
SENSe:GSM:SIGN<i>:SMS:INFO:LRMessage:RFLag? 
Queries the "message read" flag for the last received message.
The flag is true (ON) in the following cases:
No SMS message has been received.
The last received SMS message has been read, see 
SENSe:
​
GSM:
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
GSM:
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
"Sending / Receiving an SMS"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Clear Message Text"
Top