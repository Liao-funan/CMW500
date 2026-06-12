# FETChBLUetoothMEASiISIGnalADETectedPATTern[BRATe]

Module: Bluetooth Measurements
Source: af1619e8fcf54484.htm

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
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern[:BRATe]?
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PATTern[:BRATe]? 
Returns the detected payload pattern type. A result is available after the R&S
 
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
V2.0.20
V2.1.20: optional mnemonic 
BRATe
 appended
V3.5.30: added pattern 
ALTernating
Manual operation: 
See 
"Pattern Type"
Top