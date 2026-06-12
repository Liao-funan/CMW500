# CONFigureBLUetoothSIGNiRFSettingsDTXSTABFOFFsetBRATe

Module: Bluetooth Signaling
Source: 2b84d6caf1d748f6.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FOFFset:BRATe?
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FOFFset:BRATe? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FOFFset:EDRate? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FOFFset:LENergy:LRANge? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FOFFset:LENergy:LE2M? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:FOFFset:LENergy[:LE1M]? 
Return the frequency offset under the periodic change according to the test specification for Bluetooth wireless technology (10 values for BR and LE, 3 values for EDR).
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
For dirty transmitter parameters according to the test specification for Bluetooth wireless technology, see also 
"Dirty Tx Mode"
.
Return values: 
<FreqOffset>
Range: 
-250E+3 Hz  to  250E+3 Hz
Default unit: 
Hz
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