# SENSeDATACONTrolIMS2GINFo

Module: Data Application Unit
Source: c7ef00d66fa34fc2.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Services Command Reference
 > 
IMS Service
 > 
Service Control and Information
 > 
SENSe:DATA:CONTrol:IMS2:GINFo?
SENSe:DATA:CONTrol:IMS2:GINFo? 
Queries all entries of the "General IMS Info" area.
For each entry, three parameters are returned, from oldest to latest entry: {<Timestamp>, <InfoType>, <GenericInfo>}
entry 1
, {<Timestamp>, <InfoType>, <GenericInfo>}
entry 2
, ...
Return values: 
<Timestamp>
Timestamp of the entry as string in the format 
"hh:mm:ss"
<InfoType>
NONE |
 
 INFO |
 
 WARNing |
 
 ERRor
Category of the entry
NONE means that no category is assigned. If no entry at all is available, the answer is 
"",NONE,""
.
<GenericInfo>
Text string describing the event
Example: 
See 
"Starting the internal IMS server and registering a DUT"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Entries"
Top