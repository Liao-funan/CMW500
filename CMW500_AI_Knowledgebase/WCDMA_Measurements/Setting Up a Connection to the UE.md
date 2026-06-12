# Setting Up a Connection to the UE

Module: WCDMA Measurements
Source: e7bc05eb281846b3.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Programming
 > 
Setting Up a Connection to the UE
Setting Up a Connection to the UE
// ***************************************************************************** 
// Connect the UE (switched off). Switch on the DL signal. Query the cell 
// state until it equals ON,ADJ (DL signal available at RF connector).
// ***************************************************************************** 
SOURce:WCDMa:SIGN:CELL:STATe ON
WHILE SOURce:WCDMa:SIGN:CELL:STATe:ALL? <> "ON,ADJ"
// ***************************************************************************** 
// Switch on the UE and wait until it is registered and attached.
// ***************************************************************************** 
WHILE FETCh:WCDMa:SIGN:CSWitched:STATe? <> "REG"
WHILE FETCh:WCDMa:SIGN:PSWitched:STATe? <> "ATT"
// ***************************************************************************** 
// Set up the test mode HSPA connection. 
// Query the connection state until the connections have been established.
// ***************************************************************************** 
CALL:WCDMa:SIGN:PSWitched:ACTion CONNect
WHILE FETCh:WCDMa:SIGN:PSWitched:STATe? <> "CEST"
Top