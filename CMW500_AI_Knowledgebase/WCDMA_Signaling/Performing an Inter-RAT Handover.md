# Performing an Inter-RAT Handover

Module: WCDMA Signaling
Source: 9a55db6f2f3a403f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Performing an Inter-RAT Handover
Performing an Inter-RAT Handover
// *****************************************************************************
// An inter RAT handover is a handover to another signaling application.
//
// Select redirection as mobility mode.
// Query a list of possible handover destinations (signaling applications).
// Select a handover destination from the list.
// Wait until the destination is ready to receive a handover.
// Initiate the handover.
//
// Destination parameters like operating band or channel can be changed using
// commands provided by the destination signaling application. Adjust these
// parameters before executing the following commands.
// *****************************************************************************
PREPare:WCDMa:SIGN:HANDover:MMODe RED
PREPare:WCDMa:SIGN:HANDover:CATalog:DESTination?
PREPare:WCDMa:SIGN:HANDover:DESTination 'LTE Sig1'
WHILE SOURce:LTE:SIGN:CELL:STATe:ALL? <> "RFH", "ADJ"
CALL:WCDMa:SIGN:CSWitched:ACTion HANDover
CALL:WCDMa:SIGN:PSWitched:ACTion HANDover
// *****************************************************************************
// Query and clear the event log.
// *****************************************************************************
SENSe:WCDMa:SIGN:ELOGging:ALL?
CLEan:WCDMa:SIGN:ELOGging
// *****************************************************************************
// Set connection type to be established for incoming inter RAT traffic:
// for handover and MT CS fallback.
// *****************************************************************************
CONFigure:WCDMa:SIGN:IHMobility:HANDover VOIC
CONFigure:WCDMa:SIGN:IHMobility:MTCS VOIC
Top