# CONFigureGSMSIGNiSMSOUTGoingMCLass

Module: GSM Signaling
Source: 9ad54c241764422c.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Messaging (SMS)
 > 
CONFigure:GSM:SIGN<i>:SMS:OUTGoing:MCLass
CONFigure:GSM:SIGN<i>:SMS:OUTGoing:MCLass 
<MessageClass>
Specifies default routing of SMS as defined in 3GPP TS 23.038. The MS settings override any default meaning by selecting its own routing.
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
: SMS to be stored in SIM
CL3
: SMS to be stored in terminal equipment (see 3GPP TS 07.05)
NONE
: no message class (relevant only for general data coding)
*RST:
NONE
Example: 
See 
"Sending / Receiving an SMS"
Firmware/Software: 
V3.2.20
Manual operation: 
See 
"Message Class"
Top