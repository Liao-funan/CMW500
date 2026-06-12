# Setting Up a CS Connection (Signaling)

Module: WCDMA Signaling
Source: 6928d8a91e044bd8.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Setting Up a CS Connection (Signaling)
Setting Up a CS Connection (Signaling)
// ***************************************************************************** 
// Configure release in line with specification.
// Set up a mobile terminated connection.
// Query the connection state until it equals CEST (connection established).
// Verify the connection type. Query and clean the connection attempt
// and reject counters.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CONNection:CSWitched:CRELease NORMal
CALL:WCDMa:SIGN:CSWitched:ACTion CONNect
WHILE FETCh:WCDMa:SIGN:CSWitched:STATe? <> "CEST"
SENSe:WCDMa:SIGN:CONNection:CURRent?
SENSe:WCDMa:SIGN:CONNection:CSWitched:ATTempt?
SENSe:WCDMa:SIGN:CONNection:CSWitched:REJect?
CLEan:WCDMa:SIGN:CONNection:CSWitched:ATTempt
CLEan:WCDMa:SIGN:CONNection:CSWitched:REJect
Top