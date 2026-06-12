# CONFigureBLUetoothMEASiISIGnalPLENgthLENergyLRANge

Module: Bluetooth Measurements
Source: e85251c0560f4d12.htm

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
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:LENergy:LRANge
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:LENergy:LRANge 
<PayloadLength>
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:LENergy:LE2M 
<PayloadLength>
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PLENgth:LENergy[:LE1M] 
<PayloadLength>
Specifies the number of bytes (octets) in the payload data of the measured LE test packets.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
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
PLENgth:
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
PLENgth:
​
LENergy:
​
LE2M
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
PLENgth:
​
LENergy:
​
LRANge
Parameters:
<PayloadLength>
Payload lengths for LE packets
Range: 
0 Byte(s)  to  255 Byte(s)
*RST:
37 Byte(s)
Default unit: 
byte
Example: 
See 
"Continuous, BR and LE Measurements"
Firmware/Software: 
V2.1.20
V3.5.20: range extended
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LRANge
Manual operation: 
See 
"Payload Length"
Top