# FETChBLUetoothMEASiISIGnalADETectedPTYPeLENergyLRANge

Module: Bluetooth Measurements
Source: 293b4b95b5284b31.htm

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
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PTYPe:LENergy:LRANge?
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PTYPe:LENergy:LRANge? 
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PTYPe:LENergy:LE2M? 
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PTYPe:LENergy[:LE1M]? 
Returns the detected packet type.
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
<Packet Type>
RFPHytest |
 
 ADVertiser |
 
 DATA
RFPHytest
: LE test packet (direct test mode)
ADVertiser
: air interface packet with advertising channel PDU
DATA
: data packets
Example: 
See 
"Automatic Detection Mode"
Usage: 
Query only
Firmware/Software: 
V2.1.20
V3.5.60: added 
ADVertiser
V3.5.70: added commands for LE2M and LRANge
V3.7.40: added 
DATA
Options: 
R&S CMW-KM611
Plus R&S CMW-KM721 for LE2M and LRANge
Manual operation: 
See 
"Packet Type"
Top