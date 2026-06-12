# CONFigureBLUetoothSIGNiRXQualitySEARchRINTegrityLENergyLRANge

Module: Bluetooth Signaling
Source: 3975d8da8ead4041.htm

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
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:RINTegrity:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:RINTegrity:LENergy:LRANge 
<ReportIntegrity>
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:RINTegrity:LENergy:LE2M 
<ReportIntegrity>
CONFigure:BLUetooth:SIGN<i>:RXQuality:SEARch:RINTegrity:LENergy[:LE1M] 
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
"Integrity LE"
Top