# Performing an E-HICH Measurement

Module: WCDMA Signaling
Source: 0a57ce80f9534e6d.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-HICH Tests
 > 
Performing an E-HICH Measurement
Performing an E-HICH Measurement
// *****************************************************************************
// Start the measurement and query the measurement results.
// Query the measurement state (should be "RDY").                                             
// *****************************************************************************
INIT:WCDMA:SIGN:EHICh
FETCh:WCDMa:SIGN:EHICh:CARRier?
FETCh:WCDMa:SIGN:EHICh:TRACe:METHroughput:CARRier:CURRent?
FETCh:WCDMa:SIGN:EHICh:TRACe:MPTHroughput:CARRier:CURRent?
FETCh:WCDMa:SIGN:EHICh:TRACe:THRoughput:CARRier:CURRent?
FETCh:WCDMa:SIGN:EHICh:TRACe:THRoughput:CARRier:AVERage?
FETCh:WCDMa:SIGN:EHICh:THRoughput:TOTal?
FETCh:WCDMa:SIGN:EHICh:STATe?
Top