# Switching On the Cell Signal and the UE (Signaling)

Module: WCDMA Signaling
Source: 1614fc25b48c43f2.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Switching On the Cell Signal and the UE (Signaling)
Switching On the Cell Signal and the UE (Signaling)
// ***************************************************************************** 
// Connect the UE (switched off). Switch on the DL signal. Query the cell 
// state until it equals ON,ADJ (DL signal available at RF connector).
// ***************************************************************************** 
WAITKEY >Ensure that the UE is connected to the instrument and switched off<
SOURce:WCDMa:SIGN:CELL:STATe ON
WHILE SOURce:WCDMa:SIGN:CELL:STATe:ALL? <> "ON,ADJ"
// ***************************************************************************** 
// Ensure that the reduced signaling mode is disabled.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:RSIGnaling OFF
// ***************************************************************************** 
// Switch on the UE and wait until it is registered and attached.
// ***************************************************************************** 
WAITKEY >Switch on the UE<
WHILE FETCh:WCDMa:SIGN:CSWitched:STATe? <> "REG"
WHILE FETCh:WCDMa:SIGN:PSWitched:STATe? <> "ATT"
Top