# CONFigureBLUetoothSIGNiCONNectionPAGingPTARget

Module: Bluetooth Signaling
Source: 138d7841e0b84634.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Paging Settings
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:PAGing:PTARget
CONFigure:BLUetooth:SIGN<i>:CONNection:PAGing:PTARget 
<Target>
Selects the device to page from the paging target catalog (see 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
INQuiry:
​
PTARgets:
​
CATalog?
).
After a reset, if no inquiry was made before or if no device was detected during the previous inquiry, only the default device (<Target>=0) can be selected. After a successful inquiry, the first discovered device (<Target>=1) is pre-selected.
Parameters:
<Target>
Index of the device in the paging target catalog, where 0 always corresponds to the default device.
If an invalid index is selected, an error message is returned.
Range: 
Integer >= 0
*RST:
0
Example: 
See 
"Configure Paging"
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"For Paging"
Top