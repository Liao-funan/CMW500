# CONFigureBLUetoothSIGNiCOMSettingsnoPROTocol

Module: Bluetooth Signaling
Source: 0304be0031f046eb.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Controller Configuration
 > 
CONFigure:BLUetooth:SIGN<i>:COMSettings<no>:PROTocol
CONFigure:BLUetooth:SIGN<i>:COMSettings<no>:PROTocol 
<Protocol>
Specifies the transmission parameters of serial connection.
Suffix: 
<no>
1..4
1
: HW interface for LE tests
2
: HW interface for BR / EDR tests
Parameters:
<Protocol>
XONXoff |
 
 CTSRts |
 
 NONE
Transmit flow control X-ON/X-OFF, RFR/CTS, or none
*RST:
NONE
Example: 
See 
"Configure USB Interface"
Firmware/Software: 
V3.2.70
V3.5.30: added suffix 
<no>
Manual operation: 
See 
"USB to RS232"
Top