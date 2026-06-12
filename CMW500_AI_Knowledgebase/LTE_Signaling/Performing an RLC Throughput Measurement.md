# Performing an RLC Throughput Measurement

Module: LTE Signaling
Source: 042f9a6ae530414f.htm

## 原始指令文档说明
LTE Signaling
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
INIT:LTE:SIGN:THRoughput
FETCh:LTE:SIGN:THRoughput?
FETCh:LTE:SIGN:THRoughput:STATe?
// *****************************************************************************
// Query the result traces.
// *****************************************************************************
FETCh:LTE:SIGN:THRoughput:TRACe:DL:PDU:CURRent?
FETCh:LTE:SIGN:THRoughput:TRACe:DL:PDU:AVERage?
FETCh:LTE:SIGN:THRoughput:TRACe:UL:PDU:CURRent?
FETCh:LTE:SIGN:THRoughput:TRACe:UL:PDU:AVERage?
Top