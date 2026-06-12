# FETChDATAMEASiTHRoughputSTATe

Module: Data Application Unit
Source: 8edd80e0a8b745ce.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Throughput Measurement
 > 
FETCh:DATA:MEAS<i>:THRoughput:STATe?
FETCh:DATA:MEAS<i>:THRoughput:STATe? 
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
Example: 
See 
"Performing a Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Measurement control"
Top