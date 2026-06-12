# Switching On the Cell Signal and the MS

Module: GSM Signaling
Source: 988c6924377e4a2d.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Switching On the Cell Signal and the MS
Switching On the Cell Signal and the MS
// *****************************************************************************
// Physically connect the MS (switched off), then switch on the DL signal. 
// Query the cell state until it equals ON,ADJ 
// (i.e. the DL signal is available at the RF connector).
// ***************************************************************************** 
WAITKEY >Ensure that the MS is connected to the instrument and switched off<
SOURce:GSM:SIGN:CELL:STATe ON
WHILE SOURce:GSM:SIGN:CELL:STATe:ALL? <> "ON,ADJ"
// ***************************************************************************** 
// Switch on the MS and wait until it is synchronized and attached.
// Make sure that the PS domain is enabled at all.
// ***************************************************************************** 
WAITKEY >Switch on the MS<
WHILE FETCh:GSM:SIGN:CSWitched:STATe? <> "SYNC"
WHILE FETCh:GSM:SIGN:PSWitched:STATe? <> "ATT"
Top