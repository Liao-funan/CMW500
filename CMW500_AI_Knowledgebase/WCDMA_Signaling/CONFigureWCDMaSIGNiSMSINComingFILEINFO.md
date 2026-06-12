# CONFigureWCDMaSIGNiSMSINComingFILEINFO

Module: WCDMA Signaling
Source: 6a64f371234248e2.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
CONFigure:WCDMa:SIGN<i>:SMS:INComing:FILE:INFO?
CONFigure:WCDMa:SIGN<i>:SMS:INComing:FILE:INFO? 
Display information on the received message file referenced by 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
SMS:
​
INComing:
​
FILE
.
Return values: 
<TimeStamp>
Time stamp of sending
<TeleserviceID>
Teleservice identifier
<MessageEncoding>
Encoding of the ANSI message (ASCII, binary, Unicode)
<MessageText>
Message text
<MessageLength>
The number of characters in the message
Range: 
0  to  10E+3
<MessageSegments>
The segment number
Range: 
0  to  1000
<UsedSendMethod>
WDEFault
The send method used by the UE
Example: 
See 
"Sending / Receiving a Short Message (Signaling)"
Usage: 
Query only
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Select File..."
Top