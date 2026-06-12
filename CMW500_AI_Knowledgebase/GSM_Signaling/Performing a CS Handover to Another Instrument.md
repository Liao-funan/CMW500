# Performing a CS Handover to Another Instrument

Module: GSM Signaling
Source: 9ec0e8cd892c4495.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing a CS Handover to Another Instrument
Performing a CS Handover to Another Instrument
// *****************************************************************************
// Select handover to other instrument ("No Connection").
// Select target RAT (WCDMA) and configure the other destination settings.
// Initiate the handover.
// Prepare also the settings for other target RATs.
// *****************************************************************************
PREPare:GSM:SIGN:HANDover:DESTination "No Connection"
PREPare:GSM:SIGN:HANDover:EXTernal:DESTination WCDMa
PREPare:GSM:SIGN:HANDover:EXTernal:WCDMa OB1, 10565
CALL:GSM:SIGN:CSWitched:ACTion HANDover
PREPare:GSM:SIGN:HANDover:EXTernal:GSM G09, 55, G18
PREPare:GSM:SIGN:HANDover:EXTernal:LTE OB1, 300
PREPare:GSM:SIGN:HANDover:EXTernal:TDSCdma OB1, 9596
Top