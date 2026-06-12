# SENSeNIOTSIGNiELOGALL

Module: NBIoT Signaling
Source: 37d996a58aa54426.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
Event Log
 > 
SENSe:NIOT:SIGN<i>:ELOG:ALL?
SENSe:NIOT:SIGN<i>:ELOG:ALL? 
Queries all entries of the event log.
For each entry, three parameters are returned, from oldest to latest entry: {<Timestamp>, <Category>, <Event>}
entry 1
, {<Timestamp>, <Category>, <Event>}
entry 2
, ...
Return values: 
<Timestamp>
Timestamp of the entry as string
<Category>
INFO |
 
 WARNing |
 
 ERRor |
 
 CONTinue
Category of the entry, as indicated in the main view by an icon
<Event>
Text string describing the event, e.g. 
"RRC Connection Established"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Event log entries"
Top