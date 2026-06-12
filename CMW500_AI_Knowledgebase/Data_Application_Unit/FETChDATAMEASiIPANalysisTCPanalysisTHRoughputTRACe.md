# FETChDATAMEASiIPANalysisTCPanalysisTHRoughputTRACe

Module: Data Application Unit
Source: 92f5734b3b164248.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
TCP Analysis Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:THRoughput:TRACe?
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:THRoughput:TRACe? 
<FlowID>
Queries the throughput traces for a specific connection, selected via its flow ID.
The values for the uplink and downlink traces are returned in pairs:
<Reliability>, <ThrptUL>
1
, <ThrptDL>
1
, <ThrptUL>
2
, <ThrptDL>
2
, ...
Query parameters: 
<FlowID>
Selects the connection for which the trace is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ThrptUL>
Uplink throughput
Range: 
0 bit/s  to  4E+9 bit/s
Default unit: 
bit/s
<ThrptDL>
Downlink throughput
Range: 
0 bit/s  to  4E+9 bit/s
Default unit: 
bit/s
Example: 
See 
"Performing IP Analysis"
Usage: 
Query only
Firmware/Software: 
V3.7.11
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Result diagrams"
Top