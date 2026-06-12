# ConnectingReleasing Dedicated Bearers

Module: LTE Signaling
Source: 88d640a7dfdd4b15.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Connecting/Releasing Dedicated Bearers
Connecting/Releasing Dedicated Bearers
This section is only relevant for data application tests, not for test mode connections.
// *****************************************************************************
// Query a list of established default bearers.
// Configure a dedicated bearer.
// Establish the dedicated bearer.
// *****************************************************************************
CATalog:LTE:SIGN:CONNection:DEFBearer?
PREPare:LTE:SIGN:CONN:DEDBearer "5 (cmw500.rohde-schwarz.com)", DRAM, 10, 20
CALL:LTE:SIGN:PSWitched:ACTion CONNect
// *****************************************************************************
// Query a list of established dedicated bearers.
// Select a dedicated bearer.
// Release the selected dedicated bearer.
// *****************************************************************************
CATalog:LTE:SIGN:CONNection:DEDBearer?
CONFigure:LTE:SIGN:CONNection:DEDBearer "6 (->5, DRAM)"
CALL:LTE:SIGN:PSWitched:ACTion DISConnect
Top