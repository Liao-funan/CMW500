# CONFigureBLUetoothSIGNiRFSettingsDTXSINGSTERrorLENergyLRANge

Module: Bluetooth Signaling
Source: eae186a7d9d84249.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:STERror:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:STERror:LENergy:LRANge 
<SymbolTimeErr>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:STERror:LENergy:LE2M 
<SymbolTimeErr>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:STERror:LENergy[:LE1M] 
<SymbolTimeErr>
Specifies the symbol timing error of the LE signal.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<SymbolTimeErr>
OFF |
 
 NEG50 |
 
 POS50
No symbol timing error, - 50 ppm or 50 ppm
*RST:
OFF
Example: 
See 
"Configure Dirty Transmitter"
Firmware/Software: 
V3.2.70
V3.5.70: added commands for 
...:LE2M...
 and 
...:LRANge...
Options: 
R&S CMW-KS611
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Single Values"
Top