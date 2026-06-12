# SENSeAUDioSPEechiELOGgingALL

Module: Audio Measurements
Source: d3ebbb9c1d4040a2.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Speech Analysis
 > 
SENSe:AUDio:SPEech<i>:ELOGging:ALL?
SENSe:AUDio:SPEech<i>:ELOGging:ALL? 
Queries all entries of the event log.
For each entry, three parameters are returned, from oldest to latest entry: {<Timestamp>, <Category>, <Description>}
entry 1
, {<Timestamp>, <Category>, <Description>}
entry 2
, ...
Return values: 
<Timestamp>
Timestamp of the entry as string in the format 
"hh:mm:ss"
<Cateqory>
INFO |
 
 WARNing |
 
 ERRor |
 
 CONTinue
Category of the entry, as indicated in the main view by an icon
<Description>
Text string describing the event
Usage: 
Query only
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Event Log"
Top