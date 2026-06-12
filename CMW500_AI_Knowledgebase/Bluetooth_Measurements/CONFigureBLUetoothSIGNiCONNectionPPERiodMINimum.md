# CONFigureBLUetoothSIGNiCONNectionPPERiodMINimum

Module: Bluetooth Measurements
Source: 6feabaab366e4d5b.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Combined Signal Path Commands
 > 
Signaling Commands for Measurement Settings
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
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS610
Manual operation: 
See 
"Whitening, Poll Period (BR/EDR)"
Top