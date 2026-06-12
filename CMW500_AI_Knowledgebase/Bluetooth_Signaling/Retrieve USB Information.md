# Retrieve USB Information

Module: Bluetooth Signaling
Source: 829d29a23cdf4bd2.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Retrieve USB Information
Retrieve USB Information
Discover USB devices
// ***************************************************************************** 
// Select the direct USB interface for test control commands.
// Discover USB devices, select the LE device connected via USB port 0.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:HWINterface1 USB; *OPC?
CONFigure:BLUetooth:SIGN:USBSettings1:DEVices:CATalog?
CONFigure:BLUetooth:SIGN:USBSettings1:USBDevice 0; *OPC?
Query results
// *****************************************************************************
// Query all USB information results
// *****************************************************************************
SENSe:BLUetooth:SIGN:USBDevice:INFormation:DCLass?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:DPRotocol?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:DSUBclass?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:IDPRoduct?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:IDVendor?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:MANufacturer?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:PRODuct?
SENSe:BLUetooth:SIGN:USBDevice:INFormation:SERial?
Top