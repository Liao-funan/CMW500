# FETChDATAMEASiIPANalysisTCPanalysisWSIZeTRACe

Module: Data Application Unit
Source: eac3ca81c5df4df3.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
TCP Analysis Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:WSIZe:TRACe?
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:WSIZe:TRACe? 
<FlowID>
Queries the window size traces for a specific connection, selected via its flow ID.
The values for the uplink and downlink traces are returned in pairs:
<Reliability>, <WSizeUL>
1
, <WSizeDL>
1
, <WSizeUL>
2
, <WSizeDL>
2
, ...
Query parameters: 
<FlowID>
Selects the connection for which the trace is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<WSizeUL>
Uplink TCP window size
Default unit: 
byte
<WSizeDL>
Downlink TCP window size
Default unit: 
byte
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