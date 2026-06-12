# Setting Up  a Connection

Module: NBIoT Signaling
Source: ca74c61020d941ac.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
General Configuration
 > 
Setting Up  a Connection
Setting Up a Connection
// *****************************************************************************
// Connect the UE (switched off). Switch on the DL signal. Query the cell 
// state until it equals ON,ADJ (DL signal available at RF connector).
// *****************************************************************************
WAITKEY >Ensure that the UE is connected to the instrument and switched off<
SOURce:NIOT:SIGN:CELL:STATe ON
WHILE SOURce:NIOT:SIGN:CELL:STATe:ALL? <> "ON,ADJ"
// *****************************************************************************
// Proceeding WITHOUT "Keep RRC Connection":
// Switch on the UE and wait until it is attached (state = ATT).
// Initiate an RRC connection and wait until it is established (state = CEST).
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:RRC:KEEP OFF
WAITKEY >Switch on the UE<
WHILE FETCh:NIOT:SIGN:PSWitched:STATe? <> "ATT"
CALL:NIOT:SIGN:PSWitched:ACTion CONNect
WHILE FETCh:NIOT:SIGN:PSWitched:STATe? <> "CEST"
// *****************************************************************************
// Proceeding WITH "Keep RRC Connection":
// Switch on the UE and wait until the connection is established (state = CEST).
// *****************************************************************************
CONFigure:NIOT:SIGN:CONNection:RRC:KEEP ON
WAITKEY >Switch on the UE<
WHILE FETCh:NIOT:SIGN:PSWitched:STATe? <> "CEST"
// *****************************************************************************
// Query the RRC connection state. It must be "CONN".
// *****************************************************************************
SENSe:NIOT:SIGN:RRCState?
Top