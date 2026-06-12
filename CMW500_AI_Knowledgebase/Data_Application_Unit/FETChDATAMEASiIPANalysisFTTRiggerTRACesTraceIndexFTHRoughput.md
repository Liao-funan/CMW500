# FETChDATAMEASiIPANalysisFTTRiggerTRACesTraceIndexFTHRoughput

Module: Data Application Unit
Source: 49b08c4774ed4a4f.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Flow Throughput and Trigger Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:FTTRigger:TRACes<TraceIndex>:FTHRoughput?
FETCh:DATA:MEAS<i>:IPANalysis:FTTRigger:TRACes<TraceIndex>:FTHRoughput? 
Queries a selected throughput trace.
The trace is selected via its trace index. To assign a specific connection to a trace index, see 
CONFigure:
​
DATA:
​
MEAS<i>:
​
IPANalysis:
​
FTTRigger:
​
TRACe<TraceIndex>:
​
TFLowid
.
Suffix: 
<TraceIndex>
1..10
Selects the trace to be returned.
Return values: 
<Reliability>
See 
"Reliability Indicator"
<FlowID>
Flow ID of the connection assigned to the selected trace index
<Throughput>
Comma-separated list of throughput values
Default unit: 
bit/s
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.2.11
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Results"
Top