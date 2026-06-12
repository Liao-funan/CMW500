# Switching On the Cell Signal (Reduced Signaling)

Module: WCDMA Signaling
Source: b2401f55b49a47e9.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Switching On the Cell Signal (Reduced Signaling)
Switching On the Cell Signal (Reduced Signaling)
// ***************************************************************************** 
// Connect the UE (switched off). Switch on the DL signal. Query the cell 
// state until it equals ON,ADJ (DL signal available at RF connector).
// ***************************************************************************** 
WAITKEY >Ensure that the UE is connected to the instrument and switched off<
SOURce:WCDMa:SIGN:CELL:STATe ON
WHILE SOURce:WCDMa:SIGN:CELL:STATe:ALL? <> "ON,ADJ"
// ***************************************************************************** 
// Ensure that the reduced signaling mode is enabled.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:RSIGnaling ON
Top