# SENSeLTESIGNiELOGLAST

Module: LTE Signaling
Source: e3e8fac4badc4ad2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
Event Log
 > 
SENSe:LTE:SIGN<i>:ELOG:LAST?
SENSe:LTE:SIGN<i>:ELOG:LAST? 
[<HRES>]
Queries the latest entry of the event log.
Query parameters: 
<HRES>
HRES
If you omit this parameter, the timestamp resolution is 1 s (format "hh:mm:ss").
If you send the value HRES, the timestamp resolution is 1 ms (format "hh:mm:ss.sss").
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
V2.1.30, V3.7.10 <HRES>
Manual operation: 
See 
"Event log entries"
Top