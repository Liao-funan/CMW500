# CONFigureBLUetoothSIGNiCONNectionPPERiod

Module: Bluetooth Signaling
Source: 8ada02f08af54cd1.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Signal Characteristics
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PPERiod
CONFigure:BLUetooth:SIGN<i>:CONNection:PPERiod 
<PollPeriod>
Defines how often the R&S
 
CMW transmitts a poll packet.
If the set poll period is too small for the selected packet type (for x-DH1, x-DH3, or x-DH5), it is automatically changed to 2, 4, or 6 slots. X = 1, 2, 3.
Parameters:
<PollPeriod>
Range: 
x-DH1: 1 to 127, x-DH3: 2 to 127, x-DH5: 3 to 127
*RST:
1
Default unit: 
Unit corresponds to two slots
Example: 
See 
"Transmitter test mode"
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS610
Manual operation: 
See 
"Poll Period (BR/EDR)"
Top