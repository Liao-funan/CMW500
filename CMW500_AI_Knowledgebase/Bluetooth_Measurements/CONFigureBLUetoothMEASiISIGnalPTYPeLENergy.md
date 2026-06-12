# CONFigureBLUetoothMEASiISIGnalPTYPeLENergy

Module: Bluetooth Measurements
Source: a112f27f9c7c4202.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
General Measurement Settings
 > 
Input Signal Settings
 > 
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PTYPe:LENergy
CONFigure:BLUetooth:MEAS<i>:ISIGnal:PTYPe:LENergy 
<LE Packet Type>
Specifies the packet type of the measured signal for LE measurements.
Parameters:
<LE Packet Type>
RFPHytest |
 
 ADVertiser |
 
 DATA
RFPHytest
: LE test packet (direct test mode)
ADVertiser
: air interface packet with advertising channel PDU
Advertiser is only relevant for LE1M PHY and auto detection mode (
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
DATA
: empty data packets
*RST:
RFPH
Example: 
See 
"Basic Input Signal Properties: LE Packets"
Firmware/Software: 
V3.5.60
V3.7.40: added 
DATA
Options: 
R&S CMW-KM611
Manual operation: 
See 
"Packet Type"
Top