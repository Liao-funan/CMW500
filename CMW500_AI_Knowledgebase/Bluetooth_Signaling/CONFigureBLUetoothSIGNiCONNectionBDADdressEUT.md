# CONFigureBLUetoothSIGNiCONNectionBDADdressEUT

Module: Bluetooth Signaling
Source: d803246e15786.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Paging Settings
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:BDADdress:EUT
CONFigure:BLUetooth:SIGN<i>:CONNection:BDADdress:EUT 
<BDAddress>
Sets/gets the Bluetooth device address (BD_ADDR) of a default device to attempt a connection to. If no inquiry was made before, this BD_ADDR is used for paging; otherwise, the device to page can be set via 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
PAGing:
​
PTARget
.
Parameters:
<BDAddress>
Range: 
#H0 to #HFFFFFFFFFFFF (12 hexadecimal digits)
*RST:
#H123456789012
Example: 
See 
"Manually specify BD address"
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"BD Address"
Top