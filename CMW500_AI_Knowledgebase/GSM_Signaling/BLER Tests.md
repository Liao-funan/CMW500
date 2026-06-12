# BLER Tests

Module: GSM Signaling
Source: 55dfb5271a3d4f9c.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BLER Tests
BLER Tests
// *****************************************************************************
// Configure the signaling application (band, channel, power levels, slots ...).
// Service "BLER" is required for this measurement.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:SERVice BLER
// *****************************************************************************
// Set the number of blocks to be measured to 2000 and data corruption 
// rate to 10 percent.
// *****************************************************************************
CONFigure:GSM:SIGN:BLER:SCOunt 2000
CONFigure:GSM:SIGN:CONNection:PSWitched:BDCRate 10
// *****************************************************************************
// Set up a packet switched connection.
// Initiate the measurement and retrieve overall and slot-specific results.
// *****************************************************************************
WAITKEY >Set up a PS connection via the signaling application<
READ:GSM:SIGN:BLER:OALL?
READ:GSM:SIGN:BLER:CARRier?
Top