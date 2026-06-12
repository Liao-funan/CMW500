# CONFigureBLUetoothSIGNiRXQualitySEARchPACKetsLENergyLRANge

Module: Bluetooth Signaling
Source: b7d1b4b750324be2.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
BER Search / PER   Search Measurement Commands
 > 
Measurement Settings
 > 
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:PACKets:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:PACKets:LENergy:LRANge 
<NumberPackets>
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:PACKets:LENergy:LE2M 
<NumberPackets>
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:PACKets:LENergy[:LE1M] 
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
200
Example: 
See 
"Configuring a BER/PER Search Measurement"
Firmware/Software: 
V3.5.50
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