# CONFigureBLUetoothSIGNiCONNectionPACKetsPLENgthLENergyLRANge

Module: Bluetooth Signaling
Source: f34302f681074b14.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Signal Characteristics
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PLENgth:LENergy:LRANge
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PLENgth:LENergy:LRANge 
<PayloadLength>
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PLENgth:LENergy:LE2M 
<PayloadLength>
CONFigure:BLUetooth:SIGN<i>:CONNection:PACKets:PLENgth:LENergy[:LE1M] 
<PayloadLength>
Specifies the payload length used during direct test mode.
Commands for LE 1M PHY (
...:LE1M...
), LE 2M PHY (
...:LE2M...
), and LE coded PHY (
...:LRANge...
) are available.
Parameters:
<PayloadLength>
Range: 
0 byte(s)  to  255 byte(s)
*RST:
37 byte(s)
Default unit: 
byte
Example: 
See 
"Configure Test Mode"
Firmware/Software: 
V3.2.70
V3.5.20: range extended
V3.5.70: added commands for LE2M and LRANge
Options: 
R&S CMW-KS611
Plus R&S CMW-KS721 for LE2M and LRANge
Manual operation: 
See 
"Payload Length (BR, EDR, LE)"
Top