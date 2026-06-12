# Performing a BER Measurement

Module: WCDMA Signaling
Source: aa9ea6381ece472e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
BER Tests
 > 
Performing a BER Measurement
Performing a BER Measurement
// *****************************************************************************
// Start single-shot measurement.
// Return BER measurement results.
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:WCDMa:SIGN:BER
FETCh:WCDMa:SIGN:BER?
CALCulate:WCDMa:SIGN:BER?
FETCh:WCDMa:SIGN:BER:STATe?
// *****************************************************************************
// Start continuous measurement; wait for 5 ms and return BER results.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:WCDMa:SIGN:BER:REPetition CONTinuous
INIT:WCDMa:SIGN:BER
Pause 5000
FETCh:WCDMa:SIGN:BER?
CALCulate:WCDMa:SIGN:BER?
FETCh:WCDMa:SIGN:BER:STATe:ALL?
Top