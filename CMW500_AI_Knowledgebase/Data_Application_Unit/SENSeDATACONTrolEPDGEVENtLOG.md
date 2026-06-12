# SENSeDATACONTrolEPDGEVENtLOG

Module: Data Application Unit
Source: 2d2ba9c1435c40fc.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
ePDG Service
 > 
Service Control and Information
 > 
SENSe:DATA:CONTrol:EPDG:EVENt:LOG?
SENSe:DATA:CONTrol:EPDG:EVENt:LOG? 
Queries all entries of the event log.
For each entry, three parameters are returned, from oldest to latest entry: {<Timestamps>, <Type>, <Info>}
entry 1
, {<Timestamps>, <Type>, <Info>}
entry 2
, ...
Return values: 
<Timestamps>
Timestamp of the entry as string in the format 
"hh:mm:ss"
<Type>
NONE |
 
 INFO |
 
 WARNing |
 
 ERRor
Category of the entry
NONE means that no category is assigned. If no entry at all is available, the answer is 
"",NONE,""
.
<Info>
Text string describing the event
Usage: 
Query only
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Event log entries"
Top