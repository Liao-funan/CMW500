# Setting Up a CS Connection

Module: GSM Signaling
Source: 3117251838f944ef.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Setting Up a CS Connection
Setting Up a CS Connection
// ***************************************************************************** 
// Set up a mobile terminating connection.
// Query the connection state until it equals CEST (call established).
// Query the connection delay. Query and clean the connection attempt
// and reject counters.
// ***************************************************************************** 
CALL:GSM:SIGN:CSWitched:ACTion CONNect
WHILE FETCh:GSM:SIGN:CSWitched:STATe? <> "CEST"
SENSe:GSM:SIGN:CVINfo?
SENSe:GSM:SIGN:CONNection:CSWitched:CONNection:ATTempt
SENSe:GSM:SIGN:CONNection:CSWitched:CONNection:REJect
CLEan:GSM:SIGN:CONNection:CSWitched:CONNection:ATTempt
CLEan:GSM:SIGN:CONNection:CSWitched:CONNection:REJect
Top