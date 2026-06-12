# Performing an Intra-GSM PS Handover

Module: GSM Signaling
Source: 86d79177e56b43da.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing an Intra-GSM PS Handover
Performing an Intra-GSM PS Handover
// *****************************************************************************
// For the target cell configure:
// - GSM 1800 band, channel 711
// - MCS-2 as UL coding scheme
// - a DL reference level of -80 dBm
// *****************************************************************************
PREPare:GSM:SIGN:HANDover:TARGet G18
PREPare:GSM:SIGN:HANDover:CHANnel:TCH 711
PREPare:GSM:SIGN:HAND:PSW:CSCHeme:UL MC2
PREPare:GSM:SIGN:HANDover:LEVel:TCH -80
// *****************************************************************************
// Specify the slot configuration for the target cell (single carrier).
// *****************************************************************************
PREPare:GSM:SIGN:HANDover:PSWitched:ENABle:UL OFF,OFF,ON,OFF,OFF,OFF,OFF,OFF
PREPare:GSM:SIGN:HANDover:PSWitched:GAMMa:UL 13,13,13,13,13,13,13,13
PREPare:GSM:SIGN:HAND:PSW:ENABle:DL:CARRier OFF,OFF,ON,OFF,OFF,OFF,OFF,OFF
PREPare:GSM:SIGN:HANDover:PSWitched:LEVel:DL:CARRier -5,-5,-5,-5,-5,-5,-5,-5
PREPare:GSM:SIGN:HAND:PSW:CSCHeme:DL:CARRier MC2,MC2,MC2,MC2,MC2,MC2,MC2,MC2
PREPare:GSM:SIGN:HANDover:PSWitched:UDCYcle:DL 50,75,75,100,100,75,50,25
// *****************************************************************************
// Initiate the handover.
// *****************************************************************************
CALL:GSM:SIGN:HANDover:STARt
// *****************************************************************************
// Check whether the handover has been performed successfully:
// result must be TBF, otherwise the handover has failed
// *****************************************************************************
FETCh:GSM:SIGN:PSWitched:STATe?
Top