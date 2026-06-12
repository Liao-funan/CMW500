# CONFigureBLUetoothMEASiISIGnalPATTernLENergyLE2M

Module: Bluetooth Measurements
Source: ef08f6775d2643eb.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern:LENergy:LE2M
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern:LENergy:LE2M 
<Pattern Type>
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern:LENergy[:LE1M] 
<Pattern Type>
Specifies the data pattern type that the EUT transmits as user payload data in its LE packets.
Commands for LE 1M PHY (
...:LE1M...
) and LE 2M PHY (
...:LE2M...
) are available.
For the combined signal path scenario, use:
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
LENergy[:
​
LE1M]
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PACKets:
​
PATTern:
​
LENergy:
​
LE2M
Parameters:
<Pattern Type>
P44 |
 
 P11 |
 
 OTHer
P11:
 '10101010' in transmission order (LSB first)
P44:
 '11110000' in transmission order (LSB first)
OTHer:
 any pattern except P11, P44 (see 
"LE Test Packets"
)
*RST:
OTH
Example: 
See 
"Continuous, BR and LE Measurements"
Firmware/Software: 
V2.1.20
V3.5.70: added command for LE2M
V3.7.30: removed pattern 
ALTernating
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M
Manual operation: 
See 
"Pattern Type"
Top