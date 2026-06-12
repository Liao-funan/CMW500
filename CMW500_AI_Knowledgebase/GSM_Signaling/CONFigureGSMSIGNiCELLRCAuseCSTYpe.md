# CONFigureGSMSIGNiCELLRCAuseCSTYpe

Module: GSM Signaling
Source: 71d55df4f1ff4b36.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Reject Causes
 > 
CONFigure:GSM:SIGN<i>:CELL:RCAuse:CSTYpe
CONFigure:GSM:SIGN<i>:CELL:RCAuse:CSTYpe 
<CMserRejectType>
Specifies, to which type of CM service a request reject applies. Refer to 
CONFigure:
​
GSM:
​
SIGN<i>:
​
CELL:
​
RCAuse:
​
CSRequest
Parameters:
<CMserRejectType>
NESMs |
 
 NCECall |
 
 NCSMs |
 
 ECSMs |
 
 NCALl |
 
 ECALl |
 
 SMS
NESMs
: Normal call + emergency call + SMS
NCECall
: Normal call + emergency call
NCSMs
: Normal call + SMS
ECSMs
: Emergency call + SMS
NCALl
: Normal call
ECALl
: Emergency call
SMS
: SMS
*RST:
NESM
Example: 
See 
"Configuring Reject Causes"
Firmware/Software: 
V3.7.10
Options: 
R&S CMW-KS210
Manual operation: 
See 
"CM Service Request Type"
Top