# Performing an RLC Throughput Measurement

Module: WCDMA Signaling
Source: 4518471111e54827.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Programming
 > 
RLC Throughput Tests
 > 
Performing an RLC Throughput Measurement
Performing an RLC Throughput Measurement
// *****************************************************************************
// Start the measurement and return the contents of the result table.
// Query the measurement state (should be "RDY").                                             
// *****************************************************************************
INIT:WCDMa:SIGN:THRoughput
FETCh:WCDMa:SIGN:THRoughput?
FETCh:WCDMa:SIGN:THRoughput:STATe?
// *****************************************************************************
// Query the result traces obtained in the last measurement.
// *****************************************************************************
FETCh:WCDMa:SIGN:THRoughput:TRACe:DL:PDU:CURRent?
FETCh:WCDMa:SIGN:THRoughput:TRACe:DL:PDU:AVERage?
FETCh:WCDMa:SIGN:THRoughput:TRACe:DL:SDU:CURRent?
FETCh:WCDMa:SIGN:THRoughput:TRACe:DL:SDU:AVERage?
FETCh:WCDMa:SIGN:THRoughput:TRACe:UL:PDU:CURRent?
FETCh:WCDMa:SIGN:THRoughput:TRACe:UL:PDU:AVERage?
FETCh:WCDMa:SIGN:THRoughput:TRACe:UL:SDU:CURRent?
FETCh:WCDMa:SIGN:THRoughput:TRACe:UL:SDU:AVERage?
Top