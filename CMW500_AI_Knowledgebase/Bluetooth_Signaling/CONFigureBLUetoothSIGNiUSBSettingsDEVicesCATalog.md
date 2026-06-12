# CONFigureBLUetoothSIGNiUSBSettingsDEVicesCATalog

Module: Bluetooth Signaling
Source: 03648ab030454ec1.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Controller Configuration
 > 
CONFigure:BLUetooth:SIGN<i>:USBSettings:DEVices:CATalog?
CONFigure:BLUetooth:SIGN<i>:USBSettings:DEVices:CATalog? 
Displays all EUTs discovered at USB interface. The command is relevant for the direct USB connection ("HW Interface" = USB).
Results are returned for each connected EUT: <NoDevices>, {1, <DiscoveredPort>}
1
, ..., {<NoDevices>, <DiscoveredPort>}
<NoDevices>
Return values: 
<NoDevices>
Number of all USB ports, where a connected EUT has been recognized
<ItemNumber>
The number of a list item
<DiscoveredPort>
Number of the USB port
Usage: 
Query only
Firmware/Software: 
V3.5.40
Manual operation: 
See 
"USB"
Top