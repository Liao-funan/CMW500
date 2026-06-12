# CONFigureBLUetoothSIGNiRFSettingsDTXSTABSTERrorBRATe

Module: Bluetooth Signaling
Source: 57180c2d786c41ad.htm

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
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:STERror:BRATe?
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:STERror:BRATe? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:STERror:EDRate? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:STERror:LENergy:LRANge? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:STERror:LENergy:LE2M? 
CONFigure:BLUetooth:SIGN<i>:RFSettings:DTX:STAB:STERror:LENergy[:LE1M]? 
Return the symbol timing error under the periodic change according to the test specification for Bluetooth wireless technology (10 values for BR and LE, 3 values for EDR).
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
<SymbolTimeErr>
Range: 
- 50 ppm to 50 ppm, for BR/EDR: - 20 ppm to 20 ppm
Default unit: 
ppm
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
Manual operation: 
See 
"Settings for Spec Table Mode"
Top