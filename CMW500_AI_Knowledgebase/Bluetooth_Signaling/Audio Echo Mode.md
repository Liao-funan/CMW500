# Audio Echo Mode

Module: Bluetooth Signaling
Source: dbcc61d9b6ad42a3.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Programming
 > 
Signaling Application
 > 
Audio Echo Mode
Audio Echo Mode
// *****************************************************************************
// Set operating mode to audio echo mode.
// *****************************************************************************
CONFigure:BLUetooth:SIGN:OPMode ECM; *OPC?
// *****************************************************************************
// Establish a connection in audio echo mode. 
// *****************************************************************************
CALL:BLUetooth:SIGN:CONNection:ACTion EMConnect
WHILE FETCh:BLUetooth:SIGN:CONNection:STATe? <> "ECON"
Top