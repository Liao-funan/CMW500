# CONFigureBLUetoothSIGNiCONNectionPACKetsPATTernLENergyLRANge

Module: Bluetooth Signaling
Source: e51ba7335e7f4423.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Signal Characteristics
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:LENergy:LRANge 
<Pattern Type>
Select the bit pattern to be used for tests on LE coded PHY.
Parameters:
<Pattern Type>
ALL0 |
 
 ALL1 |
 
 P11 |
 
 P44 |
 
 PRBS9
ALL0
: 00000000
ALL1
: 11111111
P11
: 10101010
P44
: 11110000
PRBS9
: pseudo-random bit sequences of a length of 9 bits (transmission of identical packet series)
*RST:
ALL1
Example: 
See 
"Configure Test Mode"
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KS721
Manual operation: 
See 
"Pattern Type (BR, EDR, LE)"
Top