# FETChDATAMEASiIPANalysisTCPanalysisRETRansmissTRACe

Module: Data Application Unit
Source: 0764cc2593e7482d.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
TCP Analysis Settings and Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:RETRansmiss:TRACe?
FETCh:DATA:MEAS<i>:IPANalysis:TCPanalysis:RETRansmiss:TRACe? 
<FlowID>
Queries the retransmission traces for a specific connection, selected via its flow ID.
The values for the uplink and downlink traces are returned in pairs:
<Reliability>, <ReTxUL>
1
, <ReTxDL>
1
, <ReTxUL>
2
, <ReTxDL>
2
, ...
Query parameters: 
<FlowID>
Selects the connection for which the trace is queried
Return values: 
<Reliability>
See 
"Reliability Indicator"
<ReTxUL>
Uplink retransmission rate
Range: 
0 %  to  100 %
Default unit: 
%
<ReTxDL>
Downlink retransmission rate
Range: 
0 %  to  100 %
Default unit: 
%
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