# CONFigureBLUetoothSIGNiCONNectionPPERiodMINimum

Module: Bluetooth Signaling
Source: 6feabaab366e4d5b.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Signal Characteristics
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PPERiod:MINimum
CONFigure:BLUetooth:SIGN<i>:CONNection:PPERiod:MINimum 
<PollPeriodMin>
Enables minimum poll period.
To prevent simultaneous master/slave transmission, the minimum poll period for an x-DHn packet type (n = 1, 3, 5) is automatically set to n+1 slots.
Parameters:
<PollPeriodMin>
OFF |
 
 ON
*RST:
ON
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