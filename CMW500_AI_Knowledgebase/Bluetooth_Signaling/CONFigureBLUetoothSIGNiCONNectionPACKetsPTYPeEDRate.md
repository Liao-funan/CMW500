# CONFigureBLUetoothSIGNiCONNectionPACKetsPTYPeEDRate

Module: Bluetooth Signaling
Source: c3912ee428ff4948.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Signal Characteristics
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PTYPe:EDRate
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PTYPe:EDRate 
<Packet Type>
Sets the EDR packet type.
Parameters:
<Packet Type>
E21P |
 
 E23P |
 
 E25P |
 
 E31P |
 
 E33P |
 
 E35P
Data – high rate packet carrying information bytes plus a 16-bit CRC code, see table below.
*RST:
E21P
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
E21P: 2-DH1
54
1
E23P: 2-DH3
367
3
E25P: 2-DH5
679
5
E31P: 3-DH1
83
1
E33P: 3-DH3
552
3
E35P: 3-DH5
1021
5
Top