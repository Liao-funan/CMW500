# Performing an RLC Throughput Measurement

Module: GSM Signaling
Source: 3480832b3d9f43b6.htm

## 原始指令文档说明
GSM Signaling
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
INIT:GSM:SIGN:THRoughput
FETCh:GSM:SIGN:THRoughput?
FETCh:GSM:SIGN:THRoughput:STATe?
// *****************************************************************************
// Query the result traces obtained in the last measurement.
// *****************************************************************************
FETCh:GSM:SIGN:THRoughput:TRACe:DL:PDU:CURRent?
FETCh:GSM:SIGN:THRoughput:TRACe:DL:PDU:AVERage?
FETCh:GSM:SIGN:THRoughput:TRACe:DL:SDU:CURRent?
FETCh:GSM:SIGN:THRoughput:TRACe:DL:SDU:AVERage?
FETCh:GSM:SIGN:THRoughput:TRACe:UL:PDU:CURRent?
FETCh:GSM:SIGN:THRoughput:TRACe:UL:PDU:AVERage?
FETCh:GSM:SIGN:THRoughput:TRACe:UL:SDU:CURRent?
FETCh:GSM:SIGN:THRoughput:TRACe:UL:SDU:AVERage?
Top