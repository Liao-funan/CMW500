# FETChDATAMEASiTHRoughputTRACeOVERallULINk[CURRent]

Module: Data Application Unit
Source: fc2153fbf6724b8c.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Throughput Measurement
 > 
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk[:CURRent]?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk[:CURRent]? 
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk[:CURRent]? 
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk[:CURRent]? 
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk[:CURRent]? 
Query the values of the overall throughput trace in uplink (ULINk) or downlink (DLINk) direction.
The trace values are returned from left to right (first to last measurement), one result per interval, see 
CONFigure:
​
DATA:
​
MEAS<i>:
​
THRoughput:
​
MCOunt
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<Results>
Comma-separated list of throughput values, one result per interval
Default unit: 
bit/s
Example: 
See 
"Performing a Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Overall Throughput results"
Top