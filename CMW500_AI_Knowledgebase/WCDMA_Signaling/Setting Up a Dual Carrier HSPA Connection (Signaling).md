# Setting Up a Dual Carrier HSPA Connection (Signaling)

Module: WCDMA Signaling
Source: 38eeeedc7e1a4fbe.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Setting Up a Dual Carrier HSPA Connection (Signaling)
Setting Up a Dual Carrier HSPA Connection (Signaling)
// ***************************************************************************** 
// Select the dual carrier HSPA scenario.
// ***************************************************************************** 
ROUTe:WCDMa:SIGN:SCEN:DCHSpa:FLEXible SUW1,RF1C,RX1,RF3C,RX2,RF1C,TX1,RF3C,TX2 
// ***************************************************************************** 
// Ensure that test mode HSUPA is configured as connection type.
// Select the correct H-Set for release 9.
// ***************************************************************************** 
CONFigure:WCDMa:SIGN:CONNection:UETerminate TEST
CONFigure:WCDMa:SIGN:CONNection:TMODe:TYPE HSPA
CONFigure:WCDMa:SIGN:CONNection:TMODe:HSPA:DIRection HSPA
CONFigure:WCDMa:SIGN:CELL:HSDPa:FIXed:HSET H8AI
*****************************************************************************
// Enable the second UL carrier in the dual carrier HSPA scenario.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier2:HSUPa:ENABle ON
// ***************************************************************************** 
// Set up a dual carrier HSPA test mode connection in the PS domain.
// Query the connection state until the connections have been established.
// *****************************************************************************
CALL:WCDMa:SIGN:CSWitched:ACTion CONNect
WAITKEY >Accept call at UE<
WHILE FETCh:WCDMa:SIGN:PSWitched:STATe? <> "CEST"
SENSe:WCDMa:SIGN:CELL:CONFig?
// *****************************************************************************
// Activate the secondary UL and DL frequency in the dual 
// carrier HSPA scenario.
// *****************************************************************************
CONFigure:WCDMa:SIGN:CELL:CARRier2:HORDer:DL ON
CONFigure:WCDMa:SIGN:CELL:CARRier2:HORDer:UL ON
CONFigure:WCDMa:SIGN:CELL:HORDer:SEND
CONFigure:WCDMa:SIGN:CELL:HORDer:SEND?
Top