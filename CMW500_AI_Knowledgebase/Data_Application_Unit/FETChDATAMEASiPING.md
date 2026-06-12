# FETChDATAMEASiPING

Module: Data Application Unit
Source: 0d00c85795194156.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Ping Measurement
 > 
FETCh:DATA:MEAS<i>:PING?
FETCh:DATA:MEAS<i>:PING? 
READ:DATA:MEAS<i>:PING? 
Queries the measured ping characteristics.
After the reliability indicator, three results are returned for each ping request:
<Reliability>, {<ReqNo>, <Timestamp>, <Latency>}
request 1
, {...}
request 2
, ...
The number of ping requests is specified by 
CONFigure:
​
DATA:
​
MEAS<i>:
​
PING:
​
PCOunt
.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ReqNo>
Request label, 0 = last request, -1 = previous request, and so on
Range: 
-1000  to  0
<Timestamp>
Timestamp as string in the format 'hh:mm:ss'
<Latency>
Round-trip time for sent packets (0 s = no reply)
Range: 
0 s  to  10 s
Default unit: 
s
Example: 
See 
"Performing a Ping Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
V3.0.10: latency unit changed from ms to s
Manual operation: 
See 
"Result diagram"
Top