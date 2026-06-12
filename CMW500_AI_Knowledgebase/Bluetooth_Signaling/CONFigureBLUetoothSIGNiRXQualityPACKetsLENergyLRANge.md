# CONFigureBLUetoothSIGNiRXQualityPACKetsLENergyLRANge

Module: Bluetooth Signaling
Source: 866e90a785c146da.htm

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
CONFigure:BLUetooth:SIGN<i>:RXQuality:PACKets:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RXQuality:PACKets:LENergy:LRANge 
<NumberPackets>
CONFigure:BLUetooth:SIGN<i>:RXQuality:PACKets:LENergy:LE2M 
<NumberPackets>
CONFigure:BLUetooth:SIGN<i>:RXQuality:PACKets:LENergy[:LE1M] 
<NumberPackets>
Defines the number of data packets to be measured per measurement cycle (statistics cycle).
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<NumberPackets>
Range: 
1  to  30E+3
*RST:
1500
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
"Packets"
Top