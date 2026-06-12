# FETChDATAMEASiIPANalysisFTTRiggerTRIGgerSTARt

Module: Data Application Unit
Source: d1d136be8d544c31.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Flow Throughput and Trigger Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:FTTRigger:TRIGger:STARt?
FETCh:DATA:MEAS<i>:IPANalysis:FTTRigger:TRIGger:STARt? 
Queries the event trigger trace for "open" events.
After the reliability indicator, two values are returned per "open" event:
<Reliability>, {<FlowID>, <TimeElapsed>}
event 1
, {<FlowID>, <TimeElapsed>}
event 2
, ...
Return values: 
<Reliability>
See 
"Reliability Indicator"
<FlowID>
Flow ID of the opened connection as string
<TimeElapsed>
X-axis value of the "open" event
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