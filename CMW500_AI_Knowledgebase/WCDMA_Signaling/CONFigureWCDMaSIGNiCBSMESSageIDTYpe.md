# CONFigureWCDMaSIGNiCBSMESSageIDTYpe

Module: WCDMA Signaling
Source: 08ba2c76e1cc4378.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Cell Broadcast Service Settings
 > 
CONFigure:WCDMa:SIGN<i>:CBS:MESSage:IDTYpe
CONFigure:WCDMa:SIGN<i>:CBS:MESSage:IDTYpe 
<Type>
Specifies the severity of the CBS message ID as either decimal or hexadecimal number.
Parameters:
<Type>
UDEFined |
 
 APResidentia |
 
 AEXTreme |
 
 ASEVere |
 
 AAMBer |
 
 EARThquake |
 
 TSUNami |
 
 ETWarning |
 
 ETWTest
UDEFined
: user defined
APResidentia
: presidential level alerts (IDs 4370 and 4383)
AEXTreme
: extreme alerts (IDs 4371 to 4372 and 4384 to 4385)
ASEVere
: severe alerts (IDs 4373 to 4378 and 4386 to 4391)
AAMBer
: amber alerts (IDs 4379 and 4392)
EARThquake
: earthquake warning (ID 4352)
TSUNami
: tsunami warning (ID 4353)
ETWarning
: earthquake and tsunami warning (ID 4354)
ETWTest
: ETWS test message (ID 4355)
*RST:
APR
Example: 
See 
"Sending a Cell Broadcast Message"
Firmware/Software: 
V3.2.60
V3.5.30: added 
EART, TSUN, ETW, ETWT
Options: 
R&S CMW-KS170
Manual operation: 
See 
"ID"
Top