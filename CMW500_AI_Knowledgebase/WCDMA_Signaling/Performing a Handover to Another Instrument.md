# Performing a Handover to Another Instrument

Module: WCDMA Signaling
Source: c976dfb405fd4b2d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
Signaling Application
 > 
Performing a Handover to Another Instrument
Performing a Handover to Another Instrument
// *****************************************************************************
// Select handover to other instrument ("No Connection").
// Select target RAT (LTE) and configure the other destination settings.
// Initiate the handover.
// Prepare also the settings for other target RATs.
// *****************************************************************************
PREPare:WCDMa:SIGN:HANDover:DESTination "No Connection"
PREPare:WCDMa:SIGN:HANDover:EXTernal:DESTination LTE
PREPare:WCDMa:SIGN:HANDover:EXTernal:LTE OB1, 300
CALL:WCDMa:SIGN:PSWitched:ACTion HANDover
PREPare:WCDMa:SIGN:HANDover:EXTernal:CDMA USC, 500
PREPare:WCDMa:SIGN:HANDover:EXTernal:EVDO USC, 500
PREPare:WCDMa:SIGN:HANDover:EXTernal:GSM G09, 55, G18
PREPare:WCDMa:SIGN:HANDover:EXTernal:TDSCdma OB1, 10565
PREPare:WCDMa:SIGN:HANDover:EXTernal:WCDMa OB1, 10565
Top