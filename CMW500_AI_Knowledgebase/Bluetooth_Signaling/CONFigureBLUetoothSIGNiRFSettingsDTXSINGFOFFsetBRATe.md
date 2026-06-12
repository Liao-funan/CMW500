# CONFigureBLUetoothSIGNiRFSettingsDTXSINGFOFFsetBRATe

Module: Bluetooth Signaling
Source: 3957b6c8de2f45eb.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FOFFset:BRATe
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FOFFset:BRATe 
<FreqOffset>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FOFFset:EDRate 
<FreqOffset>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FOFFset:LENergy:LRANge 
<FreqOffset>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FOFFset:LENergy:LE2M 
<FreqOffset>
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:SING:FOFFset:LENergy[:LE1M] 
<FreqOffset>
Specify the constant frequency offset to be added to the center frequency.
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
<FreqOffset>
Range: 
-250E+3 Hz  to  250E+3 Hz
*RST:
0 Hz
Additional ON/OFF enables/disables constant frequency offset
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