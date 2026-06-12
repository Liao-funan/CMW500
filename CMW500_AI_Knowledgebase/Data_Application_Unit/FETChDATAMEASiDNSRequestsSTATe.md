# FETChDATAMEASiDNSRequestsSTATe

Module: Data Application Unit
Source: 37f19f22f8c24d2c.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
DNS Requests Measurement
 > 
FETCh:DATA:MEAS<i>:DNSRequests:STATe?
FETCh:DATA:MEAS<i>:DNSRequests:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
Return values: 
<MeasState>
OFF |
 
 RUN |
 
 RDY
OFF:
 measurement off, no resources allocated, no results
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement terminated, valid results can be available
*RST:
OFF
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Measurement control"
Top