# CONFigureBLUetoothSIGNiCONNectionPACKetsPATTernBRATe

Module: Bluetooth Measurements
Source: 1cb6c2716e304917.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Measurement Settings
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:BRATe
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:BRATe 
<Pattern Type>
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:EDRate 
<Pattern Type>
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:LENergy:LE2M 
<Pattern Type>
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PATTern:LENergy[:LE1M] 
<Pattern Type>
Select the bit pattern to be used for tests.
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
<Pattern Type>
ALL0 |
 
 ALL1 |
 
 P11 |
 
 P44 |
 
 PRBS9 |
 
 ALT
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
ALT
: the periodical alternation of the pattern P11 and P44
*RST:
P11
Firmware/Software: 
V3.2.30
V3.5.30: added pattern 
ALT
V3.2.70: added command for LE1M
V3.5.70: added commands for LE2M
Options: 
R&S CMW-KS610 for BR/EDR
R&S CMW-KS611 for LE
Plus R&S CMW-KS721 for LE2M
Manual operation: 
See 
"Pattern Type"
Top