# SENSeBLUetoothSIGNiELOGgingALL

Module: Bluetooth Signaling
Source: 3272ae0db3d9423b.htm

## 原始指令文档说明
Bluetooth
®
 Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:BLUetooth:SIGN<i>:ELOGging:ALL?
SENSe:BLUetooth:SIGN<i>:ELOGging:ALL? 
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
CONTinue means the continuation of previous entry.
<Event>
Text string describing the event
Example: 
See 
"Query event log"
Usage: 
Query only
Firmware/Software: 
V3.7.30
Manual operation: 
See 
"Event Log"
Top