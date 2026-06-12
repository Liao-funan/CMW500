# CONFigureWLANSIGNiCONNectionSECurityEAKAKALGo

Module: WLAN Signaling
Source: 8b7f2dbc94324fdd.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Security Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:EAKA:KALGo
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:EAKA:KALGo 
<Ki>, <Opc>, <Rand>, <Algorithm>
Configures EAP-AKA on the internal RADIUS server.
Parameters:
<Ki>
Secret key as string with 32 hexadecimal digits
*RST:
000102030405060708090a0b0c0d0e0f
<Opc>
Operator variant key as string with 32 hexadecimal digits
*RST:
00000000000000000000000000000000
<Rand>
Random number as string with 32 hexadecimal digits
*RST:
00000000000000000000000000000000
<Algorithm>
MILenage |
 
 XOR
Authentication algorithm to be used
*RST:
XOR
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS660
Manual operation: 
See 
"EAP-AKA"
Top