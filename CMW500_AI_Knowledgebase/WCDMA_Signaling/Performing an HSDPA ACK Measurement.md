# Performing an HSDPA ACK Measurement

Module: WCDMA Signaling
Source: f1d15908eb5144ba.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
HSDPA ACK Tests
 > 
Performing an HSDPA ACK Measurement
Performing an HSDPA ACK Measurement
// *****************************************************************************
// Start the measurement and return the median CQI trace results for all
// carriers. Query the measurement state (should be "RDY").                                                  
// *****************************************************************************
INIT:WCDMA:SIGN:HACK
FETCh:WCDMa:SIGN:HACK:TRACe:MCQI:CARRier1:CURRent?
FETCh:WCDMa:SIGN:HACK:TRACe:MCQI:CARRier2:CURRent?
FETCh:WCDMa:SIGN:HACK:TRACe:MCQI:CARRier1:AVERage?
FETCh:WCDMa:SIGN:HACK:TRACe:MCQI:CARRier2:AVERage?
FETCh:WCDMa:SIGN:HACK:STATe?
// *****************************************************************************
// Read the other results obtained in the last measurement
// without re-starting the measurement.
// *****************************************************************************
FETCh:WCDMa:SIGN:HACK:TRACe:THRoughput:CARRier1:CURRent?
FETCh:WCDMa:SIGN:HACK:TRACe:THRoughput:CARRier2:CURRent?
FETCh:WCDMa:SIGN:HACK:TRACe:THRoughput:TOTal:CURRent?
FETCh:WCDMa:SIGN:HACK:TRACe:THRoughput:TOTal:AVERage?
FETCh:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier1:CODE:MAX?
FETCh:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier2:CODE:MAX?
FETCh:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier1:MODulation:MAX?
FETCh:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier2:MODulation:MAX?
FETCh:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier1:TBLock:MAX?
FETCh:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier2:TBLock:MAX?
FETCh:WCDMa:SIGN:HACK:THRoughput:CARRier1:ABSolute?
FETCh:WCDMa:SIGN:HACK:THRoughput:CARRier2:ABSolute?
FETCh:WCDMa:SIGN:HACK:THRoughput:CARRier1:RELative?
FETCh:WCDMa:SIGN:HACK:THRoughput:CARRier2:RELative?
FETCh:WCDMa:SIGN:HACK:TRANsmission:CARRier1?
FETCh:WCDMa:SIGN:HACK:TRANsmission:CARRier2?
FETCh:WCDMa:SIGN:HACK:BLER:CARRier1?
FETCh:WCDMa:SIGN:HACK:BLER:CARRier2?
FETCh:WCDMa:SIGN:HACK:MSFRames?
FETCh:WCDMa:SIGN:HACK:MCQI:CARRier1?
FETCh:WCDMa:SIGN:HACK:MCQI:CARRier2?
// *****************************************************************************
// Restart the measurement, query all trace results per subframe.
// *****************************************************************************
READ:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier1?
READ:WCDMa:SIGN:HACK:TRACe:SUBFrame:CARRier2?
Top