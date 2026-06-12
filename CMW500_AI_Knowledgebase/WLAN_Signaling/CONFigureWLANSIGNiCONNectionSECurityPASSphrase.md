# CONFigureWLANSIGNiCONNectionSECurityPASSphrase

Module: WLAN Signaling
Source: 93fa0de7f8dc4da5.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Connection Settings
 > 
Security Settings
 > 
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:PASSphrase
CONFigure:WLAN:SIGN<i>:CONNection:SECurity:PASSphrase 
<SecurityType>[, <Passphrase>]
Selects the WLAN security mechanism to be used and defines the passphrase for WPA/WPA2 personal.
For supported values depending on operation mode, see 
Table "Supported security mechanisms"
.
Parameters:
<SecurityType>
DISabled |
 
 WPERsonal |
 
 WENTerprise |
 
 W2Personal |
 
 W2ENterprise
DISabled
: no security
WPERsonal
: WPA personal
WENTerprise
: WPA enterprise
W2Personal
: WPA2 personal
W2ENterprise
: WPA2 enterprise
*RST:
DIS
<Passphrase>
Passphrase as string, 1 to 63 characters
*RST:
"12345678"
Example: 
See 
"Configuring Connection Settings"
Firmware/Software: 
V3.7.10, V3.7.20: <Passphrase> length extended
Manual operation: 
See 
"Mode"
Top