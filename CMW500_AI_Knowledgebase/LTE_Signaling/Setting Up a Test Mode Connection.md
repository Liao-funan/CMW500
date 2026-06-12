# Setting Up a Test Mode Connection

Module: LTE Signaling
Source: 641b493730654a37.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Setting Up a Test Mode Connection
Setting Up a Test Mode Connection
This section is only relevant for test mode connections, not for data application tests.
// *****************************************************************************
// Set up a mobile-terminated test mode connection. 
// Query the connection state until it equals CEST (connection established).
// Query the IPv4 addresses assigned to the UE.
// *****************************************************************************
CALL:LTE:SIGN:PSWitched:ACTion CONNect
WHILE FETCh:LTE:SIGN:PSWitched:STATe? <> "CEST"
SENSe:LTE:SIGN:UESinfo:UEADdress:IPV4?
After the connection has been established, you can e.g.:
Perform an LTE multi-evaluation measurement (option R&S CMW-KM500/-KM550)
Perform a BLER measurement, see 
"BLER Tests"
Modify parameters, see 
"Modifying Parameters for an Established Connection"
Top