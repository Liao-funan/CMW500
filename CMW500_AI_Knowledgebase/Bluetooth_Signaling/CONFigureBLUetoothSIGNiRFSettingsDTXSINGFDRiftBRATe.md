# CONFigureBLUetoothSIGNiRFSettingsDTXSINGFDRiftBRATe

Module: Bluetooth Signaling
Source: a6dbffd380d94b12.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FDRift:BRATe
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FDRift:BRATe 
<FreqDrift>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FDRift:EDRate 
<FreqDrift>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FDRift:LENergy:LRANge 
<FreqDrift>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FDRift:LENergy:LE2M 
<FreqDrift>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FDRift:LENergy[:LE1M] 
<FreqDrift>
Enable/disable the periodic change of frequency offset.
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
Parameters:
<FreqDrift>
OFF |
 
 ON
*RST:
OFF
Example: 
See 
"Configure Dirty Transmitter"
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
Manual operation: 
See 
"Single Values"
Top