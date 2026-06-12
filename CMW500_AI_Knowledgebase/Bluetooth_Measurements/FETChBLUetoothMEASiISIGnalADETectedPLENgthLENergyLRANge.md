# FETChBLUetoothMEASiISIGnalADETectedPLENgthLENergyLRANge

Module: Bluetooth Measurements
Source: 1109abb79acb497f.htm

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
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PLENgth:LENergy:LRANge?
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PLENgth:LENergy:LRANge? 
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PLENgth:LENergy:LE2M? 
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PLENgth:LENergy[:LE1M]? 
Returns the detected payload length.
Commands for LE 1M PHY - uncoded (
...:LE1M...
), LE 2M PHY - uncoded (
...:LE2M...
), and LE coded PHY (
...:LRANge...
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
<PayloadLength>
Range: 
0 to 255
Default unit: 
byte
Example: 
See 
"Automatic Detection Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LRANge
Top