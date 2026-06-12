# CONFigureBLUetoothSIGNiRXQualityLIMitMPERLENergyLRANge

Module: Bluetooth Signaling
Source: cb8051ebcb55452c.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER / PER   Measurement Commands
 > 
Measurement Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RXQuality:LIMit:MPER:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RXQuality:LIMit:MPER:LENergy:LRANge 
<Limit>
CONFigure:BLUetooth:SIGN<i>:RXQuality:LIMit:MPER:LENergy:LE2M 
<Limit>
CONFigure:BLUetooth:SIGN<i>:RXQuality:LIMit:MPER:LENergy[:LE1M] 
<Limit>
Specifies the upper PER limit for LE RX measurements.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<Limit>
Range: 
0 %  to  100 %
*RST:
30.8 %
Default unit: 
%
Additional parameters: OFF | ON (disables the limit | enables the limit using the previous/default level)
Example: 
See 
"Configuring a BER/PER Measurement"
Firmware/Software: 
V3.2.70
V3.5.70: added commands for 
...:LE2M...
 and 
...:LRANge...
Options: 
R&S CMW-KS611
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Limits"
Top