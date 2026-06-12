# FETChBLUetoothMEASiISIGnalADETectedPATTernLENergyLRANge

Module: Bluetooth Measurements
Source: 4fba6a86a985450e.htm

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
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern:LENergy:LRANge?
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern:LENergy:LRANge? 
Returns the detected payload pattern type for LE coded PHY. A result is available after the R&S
 
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
 '10101010'
P44:
 '11110000'
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
V3.5.70
Options: 
R&S CMW-KM721
Manual operation: 
See 
"Payload Length"
Top