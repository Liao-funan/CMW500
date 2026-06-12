# Performing an Inter-RAT CS Handover

Module: GSM Signaling
Source: db2f4cc35d9041de.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing an Inter-RAT CS Handover
Performing an Inter-RAT CS Handover
// *****************************************************************************
// An inter RAT handover is a handover to another signaling application.
//
// Query a list of possible handover destinations (signaling applications).
// Select a handover destination from the list.
// Select the handover mechanism. 
// Execute several dualband GSM handovers until the destination is 
// ready to receive a handover. Initiate the handover.
//
// Destination parameters like operating band or channel can be changed using
// commands provided by the destination signaling application. Adjust these
// parameters before executing the following commands.
// *****************************************************************************
PREPare:GSM:SIGN:HANDover:CATalog:DESTination?
PREPare:GSM:SIGN:HANDover:MMODe RED
PREPare:GSM:SIGN:HANDover:DESTination 'LTE Sig1'
CONFigure:GSM:SIGN:DUALband:BAND:TCH G09
CONFigure:GSM:SIGN:DUALband:COMBined:CS G18,711,-80,10,3
WHILE SOURce:LTE:SIGN:CELL:STATe:ALL? <> "RFH", "ADJ"
CALL:GSM:SIGN:CSWitched:ACTion HANDover
Top