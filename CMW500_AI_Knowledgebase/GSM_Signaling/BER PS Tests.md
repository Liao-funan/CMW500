# BER PS Tests

Module: GSM Signaling
Source: fa014d36ee1d4fab.htm

## 原始指令文档说明
GSM Signaling
 > 
Programming
 > 
BER PS Tests
BER PS Tests
// *****************************************************************************
// Configure the signaling application (band, channel, power levels, slots ...).
// Select service "Test Mode B" to obtain the full set of measurement results.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:SERVice TMB
// *****************************************************************************
// Set coding scheme for UL and downlink to MCS-1.
// *****************************************************************************
CONFigure:GSM:SIGN:CONNection:PSWitched:CSCHeme:UL MC1
CONF:GSM:SIGN:CONN:PSW:SCON:CSCHeme:DL:CARRier MC1,MC1,MC1,MC1,MC1,MC1,MC1,MC1
// *****************************************************************************
// Set the number of bursts to be measured to 100 in mode BER/DBLER.
// Set EGPRS measurement interval to 200 bursts.
// *****************************************************************************
CONFigure:GSM:SIGN:BER:PSWitched:SCOunt 100
CONFigure:GSM:SIGN:BER:PSWitched:MMODe BDBL
CONFigure:GSM:SIGN:BER:PSWitched:EGPRs:MINTerval 200
// *****************************************************************************
// Set the error rate limit for Class II bits to 0.2%, 
// the Data Block Error Rate (DBLER) limit to 10% and 
// the Uplink State Flag Block Error Rate (USF BLER) to 1%.
// Tell the BER measurement to stop if one of these limits is exceeded. 
// *****************************************************************************
CONFigure:GSM:SIGN:BER:PSWitched:LIMit:CIIBits 0.2
CONFigure:GSM:SIGN:BER:PSWitched:LIMit:DBLer 10
CONFigure:GSM:SIGN:BER:PSWitched:LIMit:USFBler 1
CONFigure:GSM:SIGN:BER:PSWitched:SCONdition FLIM
// *****************************************************************************
// Set up a packet switched connection.
// Initiate the measurement and retrieve the results.
// *****************************************************************************
WAITKEY >Set up a PS connection via the signaling application<
READ:GSM:SIGN:BER:PSWitched?
// *****************************************************************************
// Set up a packet switched connection.
// Start the measurement and return the contents of the result table.
// Query the measurement state (should be "RDY"). 
// Stop the measurement.                                            
// *****************************************************************************
WAITKEY >Set up a PS connection via the signaling application<
INIT:GSM:SIGN:BER:PSWitched
FETCh:GSM:SIGN:BER:PSWitched?
FETCh:GSM:SIGN:BER:PSWitched:CARRier?
FETCh:INTermediate:GSM:SIGN:BER:PSWitched:MBEP?
FETCh:INTermediate:GSM:SIGN:BER:PSWitched:MBEP:ENHanced?
FETCh:GSM:SIGN:BER:PSWitched:STATe?
STOP:GSM:SIGN:BER:PSWitched
Top