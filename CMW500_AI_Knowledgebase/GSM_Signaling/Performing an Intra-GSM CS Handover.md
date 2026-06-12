# Performing an Intra-GSM CS Handover

Module: GSM Signaling
Source: 2f1b81d4038d4f15.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing an Intra-GSM CS Handover
Performing an Intra-GSM CS Handover
// *****************************************************************************
// For the target cell configure:
// - GSM 1800 band, channel 711
// - a level of -80 dBm
// - a power control level index of 10 (corresponds to 10 dBm) 
// *****************************************************************************
PREPare:GSM:SIGN:HANDover:TARGet G18
PREPare:GSM:SIGN:HANDover:CHANnel:TCH 711
PREPare:GSM:SIGN:HANDover:LEVel:TCH -80
PREPare:GSM:SIGN:HANDover:PCL 10
PREPare:GSM:SIGN:HANDover:TSLot 3
// *****************************************************************************
// Initiate the handover.
// *****************************************************************************
CALL:GSM:SIGN:HANDover:STARt
// *****************************************************************************
// Check whether the handover has been performed successfully:
// result must be CEST, otherwise the handover has failed
// *****************************************************************************
FETCh:GSM:SIGN:CSWitched:STATe?
Top