# CONFigureBLUetoothSIGNiHWINterfaceno

Module: Bluetooth Signaling
Source: e5a311453f244550.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Controller Configuration
 > 
CONFigure:BLUetooth:SIGN<i>:HWINterface<no>
CONFigure:BLUetooth:SIGN<i>:HWINterface<no> 
<HwInterface>
Defines interface used for tests.
Suffix: 
<no>
1..4
1
: HW interface for LE tests
2
: HW interface for BR / EDR tests
Parameters:
<HwInterface>
NONE |
 
 RS232 |
 
 USB
RS232
: USB connection with USB to RS232 adapter
NONE
: no control via USB to be used
USB
: direct USB connection
*RST:
NONE
Example: 
See 
"Configure USB Interface"
Firmware/Software: 
V3.2.70
V3.5.30: added suffix 
<no>
 and value 
USB
Manual operation: 
See 
"HW Interface"
Top