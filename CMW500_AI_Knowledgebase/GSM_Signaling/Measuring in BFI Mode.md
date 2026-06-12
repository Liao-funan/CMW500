# Measuring in BFI Mode

Module: GSM Signaling
Source: 56908f66cd594a04.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in BFI Mode
Measuring in BFI Mode
Before proceeding, configure the signaling application (band, channel, power levels, slots ...) and set up a circuit switched connection.
// *****************************************************************************
// Set data source to PRBS 2E9-1 and enable DTX mode.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:DSOurce PR9
CONFigure:GSM:SIGN:CONNection:CSWitched:DTX:DL ON, -40, 0
// *****************************************************************************
// Set number of speech frames to 100 and measurement mode to "BFI".
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe BFI
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
// *****************************************************************************
// Initiate the measurement and retrieve the results.
// *****************************************************************************
READ:GSM:SIGN:BER:CSWitched?
Top