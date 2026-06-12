# CONFigureBLUetoothSIGNiCONNectionPACKetsPTYPeBRATe

Module: Bluetooth Signaling
Source: 43e405989d124279.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Signal Characteristics
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PTYPe:BRATe
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PTYPe:BRATe 
<Packet Type>
Sets the BR packet type.
Parameters:
<Packet Type>
DH1 |
 
 DH3 |
 
 DH5
Data – high rate packet carrying information bytes plus a 16-bit CRC code, see table below.
*RST:
DH1
Example: 
See 
"Configure Test Mode"
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS610
Manual operation: 
See 
"Packet Type (BR, EDR)"
Packet type
Max. payload (bytes)
Timeslots (max)
DH1
27
1
DH3
183
3
DH5
339
5
Top