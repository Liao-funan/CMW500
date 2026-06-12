# Measuring in Signal Quality Mode

Module: GSM Signaling
Source: e41db300b20a4cd5.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER CS Tests
 > 
Measuring in Signal Quality Mode
Measuring in Signal Quality Mode
Before proceeding, configure the signaling application (band, channel, power levels, slots ...) and set up a circuit switched connection.
// *****************************************************************************
// Disable enhanced measurement report, set the number of bursts to be measured
// to 100 and mode to "Signal Quality". Configure round trip delay.
// *****************************************************************************
CONFigure:GSM:SIGN:RREPort:CSWitched:EMReport:ENABle OFF
CONFigure:GSM:SIGN:BER:CSWitched:MMODe SQUality
CONFigure:GSM:SIGN:BER:CSWitched:SCOunt 100
CONFigure:GSM:SIGN:BER:CSWitched:RTDelay MAN,8
// *****************************************************************************
// Initiate the measurement and return the contents of the result
// table, stop the measurement.
// *****************************************************************************
WAITKEY >Set up a CS connection via the signaling application<
INIT:GSM:SIGN:BER:CSWitched
FETCh:GSM:SIGN:BER:CSWitched?
SENSe:GSM:SIGN:BER:CSWitched:RTDelay?
STOP:GSM:SIGN:BER:CSWitched
Top