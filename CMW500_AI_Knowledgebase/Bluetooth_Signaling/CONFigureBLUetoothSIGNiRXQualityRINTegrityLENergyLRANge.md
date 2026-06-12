# CONFigureBLUetoothSIGNiRXQualityRINTegrityLENergyLRANge

Module: Bluetooth Signaling
Source: 8e46fbdd0ccf4052.htm

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
CONFigure:BLUetooth:SIGN<i>:RXQuality:RINTegrity:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RXQuality:RINTegrity:LENergy:LRANge 
<ReportIntegrity>
CONFigure:BLUetooth:SIGN<i>:RXQuality:RINTegrity:LENergy:LE2M 
<ReportIntegrity>
CONFigure:BLUetooth:SIGN<i>:RXQuality:RINTegrity:LENergy[:LE1M] 
<ReportIntegrity>
Sets the ratio of the test packets with correct CRC transmitted by the R&S
 
CMW.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<ReportIntegrity>
OFF |
 
 ON
OFF
: 100% of packets generated with correct CRC
ON
: 50% of packets generated with correct CRC
*RST:
OFF
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
"Integrity LE"
Top