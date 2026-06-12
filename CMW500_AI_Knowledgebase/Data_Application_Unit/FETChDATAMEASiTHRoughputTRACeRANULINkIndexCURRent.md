# FETChDATAMEASiTHRoughputTRACeRANULINkIndexCURRent

Module: Data Application Unit
Source: 38782f1641bc4520.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Throughput Measurement
 > 
FETCh:DATA:MEAS<i>:THRoughput:TRACe:RAN:ULINk<Index>:CURRent?
FETCh:DATA:MEAS<i>:THRoughput:TRACe:RAN:ULINk<Index>:CURRent? 
FETCh:DATA:MEAS<i>:THRoughput:TRACe:RAN:DLINk<Index>:CURRent? 
READ:DATA:MEAS<i>:THRoughput:TRACe:RAN:ULINk<Index>:CURRent? 
READ:DATA:MEAS<i>:THRoughput:TRACe:RAN:DLINk<Index>:CURRent? 
Query the values of the throughput trace for RAN slot number <Index> in uplink (ULINk) or downlink (DLINk) direction.
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
Suffix: 
<Index>
1..4
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
V3.5.30
Manual operation: 
See 
"RAN Throughput results"
Top