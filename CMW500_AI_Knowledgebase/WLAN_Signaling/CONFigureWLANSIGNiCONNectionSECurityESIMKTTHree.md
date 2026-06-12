# CONFigureWLANSIGNiCONNectionSECurityESIMKTTHree

Module: WLAN Signaling
Source: 043a206dc5b54040.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Security Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:ESIM:KTTHree
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:ESIM:KTTHree 
<Rand>, <Sres>, <Kc>
Defines the third triplet for EAP-SIM authentication (internal RADIUS server).
Parameters:
<Rand>
Random challenge as string with 32 hexadecimal digits
*RST:
33333333333333333333333333333333
<Sres>
Signed response as string with 8 hexadecimal digits
*RST:
33323130
<Kc>
Ciphering key as string with 16 hexadecimal digits
*RST:
0000000000000000
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.2.60
Options: 
R&S CMW-KS660
Manual operation: 
See 
"EAP-SIM"
Top