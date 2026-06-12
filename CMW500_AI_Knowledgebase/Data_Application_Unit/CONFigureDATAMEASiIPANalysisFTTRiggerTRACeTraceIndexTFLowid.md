# CONFigureDATAMEASiIPANalysisFTTRiggerTRACeTraceIndexTFLowid

Module: Data Application Unit
Source: 55a2394849554114.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Flow Throughput and Trigger Results
 > 
CONFigure:DATA:MEAS<i>:IPANalysis:FTTRigger:TRACe<TraceIndex>:TFLowid
CONFigure:DATA:MEAS<i>:IPANalysis:FTTRigger:TRACe<TraceIndex>:TFLowid 
<FlowID>
Assigns a connection (flow ID) to a trace index.
Suffix: 
<TraceIndex>
1..10
Selects the trace to which the connection (flow ID) is assigned
Parameters:
<FlowID>
Flow ID of the connection to be assigned to the trace index
To assign all connections matching the flow filter criteria, set the value 0.
*RST:
<FlowID> = <TraceIndex>
Example: 
See 
"Performing IP Analysis"
Firmware/Software: 
V3.2.11
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Results"
Top