# CONFigureBLUetoothSIGNiCOMSettingsPORTsCATalog

Module: Bluetooth Signaling
Source: a922a307ee254c2c.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
EUT Controller Configuration
 > 
CONFigure:BLUetooth:SIGN<i>:COMSettings:PORTs:CATalog?
CONFigure:BLUetooth:SIGN<i>:COMSettings:PORTs:CATalog? 
Queries the COM ports used by an EUT. The command is relevant for the USB connection with USB-to-serial converter ("HW Interface" = USB to RS232 adapter).
Results are returned for each used USB port: <NoDevices>, {1, <DiscoveredPort>}
1
, ..., {<NoDevices>, <DiscoveredPort>}
<NoDevices>
Return values: 
<NoDevices>
Number of all COM ports, where a connected EUT has been recognized
<ItemNumber>
The number of a list item
<DiscoveredPort>
Number of the virtual COM port, to which the used USB port has been mapped
Example: 
See 
"Configure USB Interface"
Usage: 
Query only
Firmware/Software: 
V3.2.70
Manual operation: 
See 
"Refresh COM Port List (hotkey)"
Top