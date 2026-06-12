# Measuring in FER FACCH and FER SACCH Mode

Module: GSM Signaling
Source: f377a4e3b0574898.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in FER FACCH and FER SACCH Mode
Measuring in FER FACCH and FER SACCH Mode
// *****************************************************************************
// Re-configure the DL generator for repeated FACCH and repeated SACCH 
// transmission. A previous CS connection must be closed, e.g. by means of an 
// instrument reset. 
// Set PCL = 7 to ensure an appropriate initial power for the FER SCCCH test.
// *****************************************************************************
*RST; *OPC?
...
CONFigure:GSM:SIGN:CONNection:CSWitched:RFACch ON
CONFigure:GSM:SIGN:CONNection:CSWitched:RSACch ON
CONFigure:GSM:SIGN:RFSettings:PCL:TCH:CSWitched 7
WAITKEY >Set up a CS connection via the signaling application<
// *****************************************************************************
// Set the Frame Error Rate (FER) limits to 0.1%. 
// Tell the BER Measurement not to stop when a limit is exceeded.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:FFACch 0.1
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:FSACch 0.1
CONFigure:GSM:SIGN:BER:CSWitched:SCONdition NONE
// *****************************************************************************
// Set the measurement mode to "FER FACCH" and the number of repeated L2 frames 
// to 100. Initiate the measurement and retrieve the results.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe FFACch
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
READ:GSM:SIGN:BER:CSWitched?
// *****************************************************************************
// Set the measurement mode to "FER SACCH" and the number of repeated SACCH  
// frames to 200. Initiate the measurement and retrieve the results.  
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe FSACch
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
READ:GSM:SIGN:BER:CSWitched?
Top