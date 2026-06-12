# CONFigureBLUetoothSIGNiCONNectionINQuiryPTARgetsCATalog

Module: Bluetooth Signaling
Source: d803246e16015.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Paging Settings
 > 
CONFigure:BLUetooth:SIGN<i>:CONNection:INQuiry:PTARgets:CATalog?
CONFigure:BLUetooth:SIGN<i>:CONNection:INQuiry:PTARgets:CATalog? 
This query returns a list of all targets available for paging.
If no inquiry was made before, this list only contains the default device (see 
CONFigure:
​
BLUetooth:
​
SIGN<i>:
​
CONNection:
​
BDADdress:
​
EUT
). After inquiry, it also contains the devices that were responding (in chronological order).
Return values: 
<NoDiscoveredDevices>
 
The number of devices discovered during inquiry
{<ItemNumber>,<DiscoveredEUT>}
 
A comma-separated list of Bluetooth devices, where each device is represented by an item number and its 
BD_Address
 in hexadecimal notation. Item number 0 always represents the default target.
Example: 
See 
"Inquire BD address"
Usage: 
Query only
Firmware/Software: 
V3.0.12
Manual operation: 
See 
"Inquire (hotkey)"
Top