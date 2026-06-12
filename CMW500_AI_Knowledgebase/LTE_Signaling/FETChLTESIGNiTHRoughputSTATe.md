# FETChLTESIGNiTHRoughputSTATe

Module: LTE Signaling
Source: 8e7cebb45fe147a2.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Control and States
 > 
FETCh:LTE:SIGN<i>:THRoughput:STATe?
FETCh:LTE:SIGN<i>:THRoughput:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<State>
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
"Performing an RLC Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"RLC Throughput (Softkey)"
Top