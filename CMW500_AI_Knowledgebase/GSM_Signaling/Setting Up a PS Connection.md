# Setting Up a PS Connection

Module: GSM Signaling
Source: 2ed92bb02680495c.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Setting Up a PS Connection
Setting Up a PS Connection
// ***************************************************************************** 
// Set up a PS connection.
// Query the connection state until the connection has been established.
// Query the IPv4 address and APN assigned to the MS.
// ***************************************************************************** 
CALL:GSM:SIGN:PSWitched:ACTion CONNect
WHILE FETCh:GSM:SIGN:PSWitched:STATe? <> TBF
SENSe:GSM:SIGN:MSSinfo:MSADdress:IPV4?
SENSe:GSM:SIGN:MSSinfo:APN?
Top