# Performing an E-AGCH Measurement

Module: WCDMA Signaling
Source: 43324e1efb954e44.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
E-AGCH Tests
 > 
Performing an E-AGCH Measurement
Performing an E-AGCH Measurement
// *****************************************************************************
// Start the measurement and query the measurement results.
// Query the measurement state (should be "RDY").                                             
// *****************************************************************************
INIT:WCDMA:SIGN:EAGCh
FETCh:WCDMa:SIGN:EAGCh?
FETCh:WCDMa:SIGN:EAGCh:TRACe:GENeral?
FETCh:WCDMa:SIGN:EAGCh:STATe?
Top