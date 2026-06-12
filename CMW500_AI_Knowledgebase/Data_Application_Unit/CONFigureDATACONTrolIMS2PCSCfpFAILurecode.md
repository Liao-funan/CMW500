# CONFigureDATACONTrolIMS2PCSCfpFAILurecode

Module: Data Application Unit
Source: 107c6391f2b84d19.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
P-CSCF Settings
 > 
CONFigure:DATA:CONTrol:IMS2:PCSCf<p>:FAILurecode
CONFigure:DATA:CONTrol:IMS2:PCSCf<p>:FAILurecode 
<FailureCode>
Defines a failure code for the P-CSCF number <p>, behavior = 
FAIL
.
Suffix: 
<p>
1..10
Parameters:
<FailureCode>
BADRequest |
 
 FORBidden |
 
 NOTFound |
 
 INTerror |
 
 UNAVailable |
 
 BUSYeveryw
BADRequest:
 "400 Bad Request"
FORBidden:
 "403 Forbidden"
NOTFound:
 "404 Not Found"
INTerror:
 "500 Server Internal Error"
UNAVailable:
 "503 Service Unavailable"
BUSYeveryw:
 "600 Busy Everywhere"
*RST:
BADR
Example: 
See 
"Configuring P-CSCF profiles"
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Failure"
Top