# Attaching the UE and Activating SCCs

Module: LTE Signaling
Source: 91462de3610e4011.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Attaching the UE and Activating SCCs
Attaching the UE and Activating SCCs
// *****************************************************************************
// Connect the UE (switched off). Switch on the DL signal. Query the cell 
// state until it equals ON,ADJ (DL signal available at RF connector).
// *****************************************************************************
WAITKEY >Ensure that the UE is connected to the instrument and switched off<
SOURce:LTE:SIGN:CELL:STATe ON
WHILE SOURce:LTE:SIGN:CELL:STATe:ALL? <> "ON,ADJ"
// *****************************************************************************
// Switch on the UE and wait until it is attached (connection state = ATT).
// *****************************************************************************
WAITKEY >Switch on the UE<
WHILE FETCh:LTE:SIGN:PSWitched:STATe? <> "ATT"
// *****************************************************************************
// Query the RRC connection state.
// *****************************************************************************
SENSe:LTE:SIGN:RRCState?
// *****************************************************************************
// Query the SCC1 state. The SCC connection is set up automatically after attach
// if: a carrier aggregation scenario is active, the SCC activation mode is
// "AUTO" and keep RRC connection is enabled.
// ***************************************************************************** 
FETCh:LTE:SIGN:SCC1:STATe?
Top