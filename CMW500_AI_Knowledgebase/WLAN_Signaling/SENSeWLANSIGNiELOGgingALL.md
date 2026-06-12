# SENSeWLANSIGNiELOGgingALL

Module: WLAN Signaling
Source: 8ac7ca7263c44f04.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
Event Log
 > 
SENSe:WLAN:SIGN<i>:ELOGging:ALL?
SENSe:WLAN:SIGN<i>:ELOGging:ALL? 
Queries all entries of the event log.
For each entry, three parameters are returned, from oldest to latest entry: {<Category>, <Timestamp>, <Description>}
entry 1
, {<Category>, <Timestamp>, <Description>}
entry 2
, ...
Return values: 
<Category>
INFO |
 
 WARNing |
 
 ERRor |
 
 EMPTy
Category of the entry, as indicated in the main view by an icon
EMPTy means that there are no entries.
<Timestamp>
Timestamp of the entry as string in the format "hh:mm:ss"
<Description>
Text string describing the event
Usage: 
Query only
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Event log entries"
Top