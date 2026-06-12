# Performing a Handover to Another Instrument

Module: LTE Signaling
Source: 195cc982524c4d3b.htm

## 原始指令文档说明
LTE Signaling
 > 
Programming
 > 
General Configuration
 > 
Performing a Handover to Another Instrument
Performing a Handover to Another Instrument
// *****************************************************************************
// Select handover to other instrument ("No Connection").
// Select target RAT (WCDMA) and configure the other destination settings.
// Initiate the handover.
// Prepare also the settings for other target RATs.
// *****************************************************************************
PREPare:LTE:SIGN:HANDover:DESTination "No Connection"
PREPare:LTE:SIGN:HANDover:EXTernal:DESTination WCDMa
PREPare:LTE:SIGN:HANDover:EXTernal:WCDMa OB1, 10565
CALL:LTE:SIGN:PSWitched:ACTion HANDover
PREPare:LTE:SIGN:HANDover:EXTernal:CDMA USC, 500
PREPare:LTE:SIGN:HANDover:EXTernal:EVDO USC, 500
PREPare:LTE:SIGN:HANDover:EXTernal:GSM G09, 55, G18
PREPare:LTE:SIGN:HANDover:EXTernal:LTE OB1, 300
PREPare:LTE:SIGN:HANDover:EXTernal:TDSCdma OB1, 10565
Top