# Measuring in RBERFER Mode

Module: GSM Signaling
Source: ced77561fabc4328.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in RBER/FER Mode
Measuring in RBER/FER Mode
Before proceeding, configure the signaling application and set up a circuit switched connection.
// *****************************************************************************
// Set number of speech frames to 100 and measurement mode to "RBER/FER".
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe RFER
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
// *****************************************************************************
// Set the residual bit error rate limits for Class II and Class Ib bits to 0.2% 
// and 0.4%, respectively; set the Frame Erasure Ratio (FER) limit to 0.1%. 
// Tell the BER measurement not to stop when a limit is exceeded.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:CIIBits 0.2
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:CIBBits 0.4
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:FER 0.1
CONFigure:GSM:SIGN:BER:CSWitched:SCONdition NONE
// *****************************************************************************
// Initiate the measurement and retrieve the results.
// *****************************************************************************
READ:GSM:SIGN:BER:CSWitched?
Top