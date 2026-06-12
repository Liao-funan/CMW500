# CONFigureWCDMaSIGNiSMSOUTGoingFILE

Module: WCDMA Signaling
Source: 9f4e9ec63ee44f06.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
CONFigure:WCDMa:SIGN<i>:SMS:OUTGoing:FILE
CONFigure:WCDMa:SIGN<i>:SMS:OUTGoing:FILE 
<SMSFile>
Selects an outgoing message file. To view details of the message use 
CONFigure:
​
WCDMa:
​
SIGN<i>:
​
SMS:
​
OUTGoing:
​
FILE:
​
INFO?
. The message files are stored in the directory 
D:\Rohde-Schwarz\CMW\Data\SMS\WCDMA\...
.
Parameters:
<SMSFile>
Outgoing SMS file
*RST:
No File Selected
Example: 
CONFigure:WCDMa:SIGN:SMS:OUTGoing:FILE 'rx_sms_001.sms'
Example: 
See 
"Sending / Receiving a Short Message (Signaling)"
Firmware/Software: 
V3.5.30
Manual operation: 
See 
"Select File..."
Top