# SENSeWCDMaSIGNiELOGgingALL

Module: WCDMA Signaling
Source: 2bee4b3b5e484a57.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
Connection Control and States
 > 
SENSe:WCDMa:SIGN<i>:ELOGging:ALL?
SENSe:WCDMa:SIGN<i>:ELOGging:ALL? 
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
<Description>
Text string describing the event
Example: 
See 
"Performing an Inter-RAT Handover"
Usage: 
Query only
Firmware/Software: 
V3.2.60
Manual operation: 
See 
"Event Log"
Top