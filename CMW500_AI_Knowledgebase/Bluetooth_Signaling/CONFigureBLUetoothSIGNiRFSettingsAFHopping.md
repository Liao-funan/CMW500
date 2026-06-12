# CONFigureBLUetoothSIGNiRFSettingsAFHopping

Module: Bluetooth Signaling
Source: 55ed807e9ff64654.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:AFHopping
CONFigure:BLUetooth:SIGN<i>:RFSettings:AFHopping 
<AdaptiveHopping>, <Mode>
Specifies the parameters of adaptive hopping.
Parameters:
<AdaptiveHopping>
OFF |
 
 ON
Disables, enables adaptive hopping.
*RST:
OFF
<Mode>
EUT |
 
 NORM |
 
 USER
EUT
: only the EUT reports bad channels
NORM
: both, the EUT and instrument report bad channels
USER
: bad channels specified manually via 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
RFSettings:
​
AFHopping:
​
UCHannels
*RST:
NORM
Example: 
See 
"Configure Test Mode"
Firmware/Software: 
V3.5.50
Options: 
R&S CMW-KS610
Top