# Measuring in Burst by Burst Mode

Module: GSM Signaling
Source: 853c43ed92e94df1.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in Burst by Burst Mode
Measuring in Burst by Burst Mode
Before proceeding, configure the signaling application (band, channel, power levels, slots ...) and set up a circuit switched connection.
// *****************************************************************************
// Set the number of bursts to be measured to 100 and the measurement mode to
// "Burst by Burst".
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:MMODe BBB
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
// *****************************************************************************
// Tell the BER measurement to stop if the BER limit (the only limit for this 
// measurement mode) is exceeded; set this limit to 0.2%.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:CSWitched:SCONdition FLIM
CONFigure:GSM:SIGN:BER:CSWitched:LIMit:BER 0.2
// *****************************************************************************
// Initiate the measurement and retrieve the results.
// *****************************************************************************
READ:GSM:SIGN:BER:CSWitched?
Top