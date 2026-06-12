# CONFigureBLUetoothMEASiISIGnalPATTernLENergyLRANge

Module: Bluetooth Measurements
Source: f3f27b0d5f1242ed.htm

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
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern:LENergy:LRANge
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern:LENergy:LRANge 
<Pattern Type>
Specifies the data pattern type for LE coded PHY, that the EUT transmits as user payload data.
For the combined signal
path scenario, use 
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
LRANge
Parameters:
<Pattern Type>
ALL1 |
 
 OTHer
ALL1:
 '11111111'
OTHer:
 any pattern except ALL1
*RST:
ALL1
Example: 
See 
"Basic Input Signal Properties: LE Packets"
Firmware/Software: 
V3.5.70
Options: 
R&S CMW-KM721
Manual operation: 
See 
"Pattern Type"
Top