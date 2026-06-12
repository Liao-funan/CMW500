# Setting Up an HSPA Connection (Signaling)

Module: WCDMA Signaling
Source: b98fd8483cd5421d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Setting Up an HSPA Connection (Signaling)
Setting Up an HSPA Connection (Signaling)
// ***************************************************************************** 
// Ensure that test mode RMC plus HSPA is configured as connection type.
// Configure combined CS/PS connection setup.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CONNection:UETerminate TEST
CONFigure:WCDMa:SIGN:CONNection:TMODe:TYPE RHSPa
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:PROCedure CSPS
// ***************************************************************************** 
// Enable ROHC and enable two ROHC profiles used by the UE.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CONNection:PACKet:ROHC:ENABle ON
CONFigure:WCDMa:SIGN:CONNection:PACKet:ROHC:PROFiles ON,OFF,ON
// ***************************************************************************** 
// Set up an RMC connection in the CS domain and an HSPA test mode connection
// in the PS domain.
// Query the connection state until the connections have been established.
// *****************************************************************************
CALL:WCDMa:SIGN:CSWitched:ACTion CONNect
WAITKEY >Accept call at UE<
WHILE FETCh:WCDMa:SIGN:CSWitched:STATe? <> "CEST"
WHILE FETCh:WCDMa:SIGN:PSWitched:STATe? <> "CEST"
SENSe:WCDMa:SIGN:CELL:CONFig?
// *****************************************************************************
// Check which kind of HSPA test mode has been activated.
// Query the IPv4 address and APN used by the UE. 
// ***************************************************************************** 
SENSe:WCDMa:SIGN:UESinfo:UEADdress:IPV4?
SENSe:WCDMa:SIGN:UESinfo:APN?
Top