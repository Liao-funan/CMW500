# Setting Up a Reduced Signaling Connection

Module: WCDMA Signaling
Source: 725091e841b4484f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Setting Up a Reduced Signaling Connection
Setting Up a Reduced Signaling Connection
// ***************************************************************************** 
// Switch on the dedicated downlink channels.
// Query the connection state until the process is complete.
// ***************************************************************************** 
CALL:WCDMa:SIGN:RSIGnaling:ACTion ON
WHILE FETCh:WCDMa:SIGN:RSIGnaling:STATe? <> "ON"
// ***************************************************************************** 
// Switch on the UE and configure it so that it synchronizes to the DL 
// signal and provides a WCDMA uplink signal.
// Note the demodulation information displayed in the connection status pane.
// It indicates whether the power of the uplink signal is in range and the
// instrument can synchronize to the uplink signal.
// *****************************************************************************
Top