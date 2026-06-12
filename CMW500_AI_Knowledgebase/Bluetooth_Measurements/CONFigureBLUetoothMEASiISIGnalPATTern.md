# CONFigureBLUetoothMEASiISIGnalPATTern

Module: Bluetooth Measurements
Source: 3b9303b6833544db.htm

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
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PATTern 
<Pattern Type>
Specifies the data pattern type that the EUT transmits as user payload data on its BR packets. The setting is not valid for EDR packets.
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
BRATe
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
EDRate
Parameters:
<Pattern Type>
P44 |
 
 P11 |
 
 OTHer |
 
 ALTernating
P11:
 10101010
P44:
 11110000
OTHer:
 any pattern except P11, P44
ALTernating
: the periodical change of the pattern P11 and P44
*RST:
OTH
Example: 
See 
"Basic Input Signal Properties: EDR Packets"
Firmware/Software: 
V1.0.10.1
V3.5.30: added pattern 
ALTernating
Manual operation: 
See 
"Pattern Type"
Top