# CONFigureBLUetoothSIGNiRFSettingsDTXSTABFDRiftBRATe

Module: Bluetooth Signaling
Source: 1b9e00658f7e44e7.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FDRift:BRATe?
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FDRift:BRATe? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FDRift:EDRate? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FDRift:LENergy:LRANge? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FDRift:LENergy:LE2M? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FDRift:LENergy[:LE1M]? 
Query the dirty transmitter frequency drift set according to the test specification for Bluetooth wireless technology.
Commands for BR (
...:BRATe...
), EDR (
...:EDRate...
), LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Return values: 
<FreqDrift>
OFF |
 
 ON
Frequency drift is always enabled, according to the test specification for Bluetooth wireless technology.
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
R&S CMW-KS610 for BR/EDR
R&S CMW-KS611 for LE
Plus R&S CMW-KS721 for LE2M and LRANge
Top