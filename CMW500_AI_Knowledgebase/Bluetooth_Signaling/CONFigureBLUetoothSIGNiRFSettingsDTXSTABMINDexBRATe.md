# CONFigureBLUetoothSIGNiRFSettingsDTXSTABMINDexBRATe

Module: Bluetooth Signaling
Source: f31049a8203c4f1f.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:BRATe?
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:BRATe? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STANdard:LENergy:LRANge? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STANdard:LENergy:LE2M? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:MINDex:STANdard:LENergy[:LE1M]? 
Return the modulation index under the periodic change according to the test specification for Bluetooth wireless technology (10 values).
Commands for BR (
...:BRATe...
), LE 1M PHY (
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
0.2  to  0.55
Example: 
See 
"Configure Dirty Transmitter"
Usage: 
Query only
Firmware/Software: 
V3.2.50
V3.2.70: added command for LE1M
V3.5.70: added commands for 
...:LE2M...
 and 
...:LRANge...
Options: 
R&S CMW-KS610 for BR
R&S CMW-KS611 for LE
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Settings for Spec Table Mode"
Top