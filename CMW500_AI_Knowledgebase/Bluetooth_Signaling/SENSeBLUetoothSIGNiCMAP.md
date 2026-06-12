# SENSeBLUetoothSIGNiCMAP

Module: Bluetooth Signaling
Source: ee64074f87ab42f9.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
General Settings
 > 
Adaptive Frequency Hopping Control
 > 
SENSe:BLUetooth:SIGN<i>:CMAP?
SENSe:BLUetooth:SIGN<i>:CMAP? 
Queries channels used by adaptive frequency hopping (AFH).
Return values: 
<AFHChannelMap>
0 |
 
 1
79 comma-separated values, one value per channel:
0
: channel is blocked for AFH
1
: channel is released for AFH
Example: 
See 
"Transmitter test mode"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS610
Top