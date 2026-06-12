# Configure Paging

Module: Bluetooth Signaling
Source: fd554144a7f54c9f.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Configure Paging
Configure Paging
// *****************************************************************************
// Specify the supervision timeout, page timeout, page scan repetition 
// mode and page target device
// Note: Use ...PAGing:PTARget 1 to connect to the first inquired EUT 
// or ...PAGing:PTARget 0 to connect to the manually specified EUT
// *****************************************************************************
CONFigure:BLUetooth:SIGN:CONNection:SVTimeout 16000; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PAGing:PSRMode R1; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PAGing:PTARget 1; *OPC?
CONFigure:BLUetooth:SIGN:CONNection:PAGing:TOUT 16384; *OPC?
Top