# Measuring in AMR Inband FER Mode

Module: GSM Signaling
Source: 7613ccdaeb2a471b.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in AMR Inband FER Mode
Measuring in AMR Inband FER Mode
Before proceeding, configure the signaling application.
// *****************************************************************************
// Select an AMR codec (e.g. AMR narrowband half-rate GMSK).
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:CSWitched:TMODe ANHG
WAITKEY >Set up a CS connection via the signaling application<
// *****************************************************************************
// Set number of speech frames to 100 and measurement mode to "AMR Inband FER".
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe AIFer
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
// *****************************************************************************
// Set the FER limit to 0.5%.
// Tell the BER measurement not to stop when a limit is exceeded.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:FER 0.5
CONFigure:GSM:SIGN:BER:CSWitched:SCONdition NONE
// *****************************************************************************
// Initiate the measurement and retrieve the results.
// *****************************************************************************
READ:GSM:SIGN:BER:CSWitched?
Top