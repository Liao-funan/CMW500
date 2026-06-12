# FETChBLUetoothMEASiISIGnalADETectedPATTernLENergyLE2M

Module: Bluetooth Measurements
Source: efdcd6239370420f.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Detected Signal Characteristics
 > 
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern:LENergy:LE2M?
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern:LENergy:LE2M? 
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern:LENergy[:LE1M]? 
Returns the detected payload pattern type.
Commands for LE 1M PHY (
...:LE1M...
) and LE 2M PHY (
...:LE2M...
) are available.
A result is available after the R&S
 
CMW has auto-detected a packet (
CONFigure:
​
BLUetooth:
​
MEAS<i>:
​
ISIGnal:
​
DMODe
 
AUTO
).
Return values: 
<Reliability>
"Reliability Indicator"
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
"Automatic Detection Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.5.30: added pattern 
ALTernating
V3.5.70: added command for LE2M
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M
Manual operation: 
See 
"Payload Length"
Top