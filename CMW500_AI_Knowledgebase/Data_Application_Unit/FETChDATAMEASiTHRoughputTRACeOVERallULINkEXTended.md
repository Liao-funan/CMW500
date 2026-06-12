# FETChDATAMEASiTHRoughputTRACeOVERallULINkEXTended

Module: Data Application Unit
Source: 9ba076bfa8244bd3.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Throughput Measurement
 > 
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk:EXTended?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk:EXTended? 
FETCh:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk:EXTended? 
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:ULINk:EXTended? 
READ:DATA:MEAS<i>:THRoughput:TRACe:OVERall:DLINk:EXTended? 
Query the values of the overall throughput trace in uplink (ULINk) or downlink (DLINk) direction.
The trace values are returned from left to right (first to last measurement). There are two values per interval:
<Reliability>, {<Counter>, <Result>}
interval 1
, {...}
interval 2
, ..., {...}
interval n
The counter is useful if you want to perform repeated queries and combine the returned result traces.
To configure the number of intervals, see 
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
<Counter>
Counter for identification of the result value
The counter starts with 1 and is incremented for each result as long as the measurement is running.
<Result>
Default unit: 
bit/s
Usage: 
Query only
Firmware/Software: 
V3.5.21
Manual operation: 
See 
"Overall Throughput results"
Top