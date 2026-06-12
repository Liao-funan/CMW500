# CONFigureBLUetoothSIGNiRFSettingsDTXSINGMINDexSTANdardLENergyLRANge

Module: Bluetooth Signaling
Source: 0308c0bf87a240f9.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:MINDex:STANdard:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:MINDex:STANdard:LENergy:LRANge 
<ModIndex>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:MINDex:STANdard:LENergy:LE2M 
<ModIndex>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:MINDex:STANdard:LENergy[:LE1M] 
<ModIndex>
Specifies the modulation corruption of the signal. Modulation index of 0.5 means no corruption.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<ModIndex>
Range: 
0.4  to  0.6
*RST:
0.50
Additional ON/OFF enables/disables modulation index.
Example: 
See 
"Configure Dirty Transmitter"
Firmware/Software: 
V3.2.70
V3.5.60: range extended
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