# CONFigureBLUetoothSIGNiRFSettingsAFHoppingUCHannels

Module: Bluetooth Signaling
Source: a35f372493634b17.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:AFHopping:UCHannels
CONFigure:BLUetooth:SIGN<i>:RFSettings:AFHopping:UCHannels 
<ChannelList>...
Specifies user-defined channels for adaptive frequency hopping (AFH). The setting is relevant for mode = USER, see 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
RFSettings:
​
AFHopping
.
Parameters:
<ChannelList>
0 |
 
 1
79 comma-separated values, one value per channel:
0
: channel is blocked for AFH
1
: channel is released for AFH
*RST:
1
Example: 
See 
"Configure Test Mode"
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS610
Top