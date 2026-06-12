# Performing an Inter-RAT Handover

Module: LTE Signaling
Source: 323561ccda8842b1.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing an Inter-RAT Handover
Performing an Inter-RAT Handover
// *****************************************************************************
// An inter-RAT handover is a handover to another signaling application.
//
// Query a list of possible handover destinations (signaling applications).
// Select a handover destination from the list.
// Select the handover mechanism.
// Wait until the destination is ready to receive a handover.
// Initiate the handover.
//
// Destination parameters like operating band or channel can be changed using
// commands provided by the destination signaling application. Adjust these
// parameters before executing the following commands.
// *****************************************************************************
PREPare:LTE:SIGN:HANDover:CATalog:DESTination?
PREPare:LTE:SIGN:HANDover:DESTination "GSM Sig1"
PREPare:LTE:SIGN:HANDover:MMODe REDirection
WHILE SOURce:GSM:SIGN:CELL:STATe? <> "RFH"
CALL:LTE:SIGN:PSWitched:ACTion HANDover
Top