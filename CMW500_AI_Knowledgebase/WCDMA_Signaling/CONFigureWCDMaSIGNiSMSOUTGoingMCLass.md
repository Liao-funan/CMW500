# CONFigureWCDMaSIGNiSMSOUTGoingMCLass

Module: WCDMA Signaling
Source: 1b4e9167c9c24ceb.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
CONFigure:WCDMa:SIGN<i>:SMS:OUTGoing:MCLass
CONFigure:WCDMa:SIGN<i>:SMS:OUTGoing:MCLass 
<MessageClass>
Specifies default routing of SMS as defined in 3GPP TS 23.038. The UEs override the default routing by selecting their own routing.
Parameters:
<MessageClass>
CL0 |
 
 CL1 |
 
 CL2 |
 
 CL3 |
 
 NONE
CL0
: class 0, SMS not to be stored automatically
CL1
: SMS to be stored in mobile equipment
CL2
: SMS to be stored in (U)SIM
CL3
: SMS to be stored in terminal equipment (see 3GPP TS 27.005)
NONE
: no message class (relevant only for general data coding)
Example: 
See 
"Sending / Receiving a Short Message (Signaling)"
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"Message Class"
Top