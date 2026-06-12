# Configure USB Interface

Module: Bluetooth Signaling
Source: 68cf34aecb094e1a.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configure USB Interface
Configure USB Interface
// ***************************************************************************** 
// Select the serial interface for test control commands and HCI as 
// communication protocol. Connect the EUT to a USB port and query 
// the port list. Configure the further transmission settings accordingly,
// let reset the EUT before each test start command, specify
// delay after reset. Send custom HCI command to the EUT.
// ***************************************************************************** 
CONFigure:BLUetooth:SIGN:HWINterface1 RS232; *OPC?
CONFigure:BLUetooth:SIGN:CPRotocol HCI; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings1:PORTs:CATalog?
CONFigure:BLUetooth:SIGN:COMSettings1:COMPort 0; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings1:BAUDrate B14K; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings1:STOPbits S1; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings1:PARity EVEN; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings1:PROTocol NONE; *OPC?
CONFigure:BLUetooth:SIGN:COMSettings1:ERESet ON; *OPC?
CONFigure:BLUetooth:SIGN:LENergy:RESet:DELay 0.1
CALL:BLUetooth:SIGN:HCICustom:SEND #H1A,#H19,#HC1
Top