# SENSeGSMSIGNiELOGALL

Module: GSM Signaling
Source: d35e20000.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
Event Log
 > 
SENSe:GSM:SIGN<i>:ELOG:ALL?
SENSe:GSM:SIGN<i>:ELOG:ALL? 
Queries all entries of the event log.
For each entry three parameters are returned, from oldest to latest entry: {<Timestamp>, <Category>, <Event>}
entry 1
, {<Timestamp>, <Category>, <Event>}
entry 2
, ...
Return values: 
<Timestamp>
Timestamp of the entry as string in the format "hh:mm:ss"
<Category>
INFO |
 
 WARNing |
 
 ERRor |
 
 CONTinue
Category of the entry, as indicated in the main view by an icon
<Event>
Text string describing the event
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Event Log Entries"
Top