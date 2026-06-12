# CONFigureWCDMaSIGNiCELLRCAuseCSTYpe

Module: WCDMA Signaling
Source: cddcbdb81ff54d87.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Network Settings
 > 
Reject Causes
 > 
CONFigure:WCDMa:SIGN<i>:CELL:RCAuse:CSTYpe
CONFigure:WCDMa:SIGN<i>:CELL:RCAuse:CSTYpe 
<CMserRejectType>
Specifies, to which type of CM service a request reject applies. Refer to 
CONFigure:
​
WCDMa:
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
"Configuring Network Settings"
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KS410
Manual operation: 
See 
"CM Service Request Type"
Top