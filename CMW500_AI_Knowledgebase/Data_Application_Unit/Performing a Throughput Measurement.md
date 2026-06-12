# Performing a Throughput Measurement

Module: Data Application Unit
Source: 6e8d95b115584b43.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing a Throughput Measurement
Performing a Throughput Measurement
// *****************************************************************************
// Specify the test duration for overall and RAN throughput.
// *****************************************************************************
CONFigure:DATA:MEAS:THRoughput:MCOunt 10
CONFigure:DATA:MEAS:THRoughput:RAN:MCOunt 10
// *****************************************************************************
// Configure the RAN slot number 2.
// *****************************************************************************
CONFigure:DATA:MEAS:THRoughput:RAN:CATaloge?
CONFigure:DATA:MEAS:THRoughput:RAN2 "LTE Signaling 2"
CONFigure:DATA:MEAS:THRoughput:RAN:TRACe:ULINk2 ON
CONFigure:DATA:MEAS:THRoughput:RAN:TRACe:DLINk2 ON
// *****************************************************************************
// Start the measurement.
// *****************************************************************************
INIT:DATA:MEAS:THRoughput
// *****************************************************************************
// Wait 12 seconds, so that a complete trace can be measured. 
// *****************************************************************************
PAUSE 12
// *****************************************************************************
// Query the overall throughput results.
// *****************************************************************************
FETCh:DATA:MEAS:THRoughput:OVERall:ULINk?
FETCh:DATA:MEAS:THRoughput:OVERall:DLINk?
FETCh:DATA:MEAS:THRoughput:TRACe:OVERall:ULINk?
FETCh:DATA:MEAS:THRoughput:TRACe:OVERall:DLINk?
// *****************************************************************************
// Alternatively, query the trace results with x-values.
// *****************************************************************************
FETCh:DATA:MEAS:THRoughput:TRACe:OVERall:ULINk:EXTended?
FETCh:DATA:MEAS:THRoughput:TRACe:OVERall:DLINk:EXTended?
// *****************************************************************************
// Query the results for RAN slot number 2 and the sum of all active RAN slots.
// *****************************************************************************
FETCh:DATA:MEAS:THRoughput:RAN:ULINk2?
FETCh:DATA:MEAS:THRoughput:RAN:DLINk2?
FETCh:DATA:MEAS:THRoughput:RAN:TOTal:SUM:ULINk?
FETCh:DATA:MEAS:THRoughput:RAN:TOTal:SUM:DLINk?
FETCh:DATA:MEAS:THRoughput:TRACe:RAN:ULINk2:CURRent?
FETCh:DATA:MEAS:THRoughput:TRACe:RAN:DLINk2:CURRent?
Top