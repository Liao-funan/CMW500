# SENSeDATAMEASiIPANalysisIPCSecurityPRTScanEVENtLOG

Module: Data Application Unit
Source: 8e370794338d4adc.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Port Scan Settings and Results
 > 
SENSe:DATA:MEAS<i>:IPANalysis:IPCSecurity:PRTScan:EVENt:LOG?
SENSe:DATA:MEAS<i>:IPANalysis:IPCSecurity:PRTScan:EVENt:LOG? 
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
V3.7.20
Manual operation: 
See 
"Event Log"
Top