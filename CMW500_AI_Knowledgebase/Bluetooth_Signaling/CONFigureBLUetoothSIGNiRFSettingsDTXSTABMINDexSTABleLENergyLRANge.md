# CONFigureBLUetoothSIGNiRFSettingsDTXSTABMINDexSTABleLENergyLRANge

Module: Bluetooth Signaling
Source: 989e2f1838334090.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
General Settings
 > 
Dirty Transmitter Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STABle:LENergy:LRANge?
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STABle:LENergy:LRANge? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STABle:LENergy:LE2M? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STABle:LENergy[:LE1M]? 
Return the modulation index h under the periodic change (10 values) for stable range h = 0.495 to 0.505.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
For dirty transmitter parameters according to the test specification for Bluetooth wireless technology, see also 
"Dirty Tx Mode"
.
Return values: 
<ModIndex>
Range: 
0.495 to 0.505
Example: 
See 
"Configure Dirty Transmitter"
Usage: 
Query only
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KS611
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Settings for Spec Table Mode"
Top