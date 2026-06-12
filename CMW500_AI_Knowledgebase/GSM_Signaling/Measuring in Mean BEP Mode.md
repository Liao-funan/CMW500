# Measuring in Mean BEP Mode

Module: GSM Signaling
Source: 178d97d7647b4868.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in Mean BEP Mode
Measuring in Mean BEP Mode
Before proceeding, configure the signaling application (band, channel, power levels, slots ...) and set up a circuit switched connection.
// *****************************************************************************
// Enable enhanced measurement report, set the number of bursts to be measured
// to 100 and mode to "Mean BEP". Configure round trip delay.
// *****************************************************************************
CONFigure:GSM:SIGN:RREPort:CSWitched:EMReport:ENABle ON
CONFigure:GSM:SIGN:BER:CSWitched:MMODe MBEP
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
CONFigure:GSM:SIGN:BER:CSWitched:RTDelay MAN,8
// *****************************************************************************
// Initiate the measurement and return the contents of the result
// table, stop the measurement.
// *****************************************************************************
WAITKEY >Set up a CS connection via the signaling application<
INIT:GSM:SIGN:BER:CSWitched
FETCh:GSM:SIGN:BER:CSWitched?
FETCh:INTermediate:GSM:SIGN:BER:CSWitched:MBEP?
SENSe:GSM:SIGN:BER:CSWitched:RTDelay?
STOP:GSM:SIGN:BER:CSWitched
Top