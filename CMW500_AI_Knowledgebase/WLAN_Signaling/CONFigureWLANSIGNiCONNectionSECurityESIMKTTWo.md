# CONFigureWLANSIGNiCONNectionSECurityESIMKTTWo

Module: WLAN Signaling
Source: 62421f2797c74ba3.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Security Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:ESIM:KTTWo
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:ESIM:KTTWo 
<Rand>, <Sres>, <Kc>
Defines the second triplet for EAP-SIM authentication (internal RADIUS server).
Parameters:
<Rand>
Random challenge as string with 32 hexadecimal digits
*RST:
44444444444444444444444444444444
<Sres>
Signed response as string with 8 hexadecimal digits
*RST:
44454647
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