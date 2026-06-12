# FETChDATAMEASiIPANalysisFTTRiggerTRIGgerEND

Module: Data Application Unit
Source: 9418e46ba51244cc.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Flow Throughput and Trigger Results
 > 
FETCh:DATA:MEAS<i>:IPANalysis:FTTRigger:TRIGger:END?
FETCh:DATA:MEAS<i>:IPANalysis:FTTRigger:TRIGger:END? 
Queries the event trigger trace for "close" events.
After the reliability indicator, two values are returned per "close" event:
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
Flow ID of the closed connection as string
<TimeElapsed>
X-axis value of the "close" event
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