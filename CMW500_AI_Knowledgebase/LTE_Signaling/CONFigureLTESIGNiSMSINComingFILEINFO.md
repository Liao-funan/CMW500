# CONFigureLTESIGNiSMSINComingFILEINFO

Module: LTE Signaling
Source: 95c9696ed8944ca3.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
CONFigure:LTE:SIGN<i>:SMS:INComing:FILE:INFO?
CONFigure:LTE:SIGN<i>:SMS:INComing:FILE:INFO? 
Displays information about the file selected via 
CONFigure:
​
LTE:
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
<MessageEncoding>
Encoding of the message as string (7-bit "ascii", 8-bit "binary", 16-bit "Unicode")
<MessageText>
Message text as string
<MessageLength>
Number of characters in the message
Range: 
0  to  10E+3
<MessageSegments>
Number of segments
Range: 
0  to  1000
Example: 
See 
"Sending / Receiving a Short Message"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"Select File"
Top