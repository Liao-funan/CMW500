# Measuring in BER Mode

Module: GSM Signaling
Source: 64ec85d1fa6f471c.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in BER Mode
Measuring in BER Mode
Before proceeding, configure the signaling application and set up a circuit switched connection.
// *****************************************************************************
// Set the number of speech frames to be measured to 100 and
// measurement mode to BER.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe BER
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
// *****************************************************************************
// Set the error rate limits for Class II and Class Ib bits to 0.2% and 0.4%.
// Tell the BER Measurement to stop if one of these limits is exceeded. 
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:CIIBits 0.2
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:CIBBits 0.4
CONFigure:GSM:SIGN:BER:CSWitched:SCONdition FLIM
// *****************************************************************************
// Initiate the measurement and retrieve the results.
// *****************************************************************************
READ:GSM:SIGN:BER:CSWitched?
Top