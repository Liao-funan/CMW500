# FETChBLUetoothMEASiISIGnalADETectedPTYPeEDRate

Module: Bluetooth Measurements
Source: d864974e19100.htm

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
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PTYPe:EDRate?
FETCh:BLUetooth:MEAS<i>:ISIGnal:ADETected:PTYPe:EDRate? 
Returns the detected EDR packet type. A result is available after the R&S
 
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
E21P |
 
 E23P |
 
 E25P |
 
 E31P |
 
 E33P |
 
 E35P
2-DH1, 2-DH3, 2-DH5, 3-DH1, 3-DH3, or 3-DH5 packets
Example: 
See 
"Automatic Detection Mode"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"Packet Type"
Top