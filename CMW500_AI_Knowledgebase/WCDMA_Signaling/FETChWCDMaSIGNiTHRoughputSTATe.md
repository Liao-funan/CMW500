# FETChWCDMaSIGNiTHRoughputSTATe

Module: WCDMA Signaling
Source: 13647ff29ff746cc.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Control and States
 > 
FETCh:WCDMa:SIGN<i>:THRoughput:STATe?
FETCh:WCDMa:SIGN<i>:THRoughput:STATe? 
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
 
 RDY |
 
 RUN
OFF:
 measurement switched off, no resources allocated, no results available (when entered after 
ABORt...
)
RDY:
 measurement has been terminated, valid results are available
RUN:
 measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
*RST:
OFF
Example: 
See 
"Performing an RLC Throughput Measurement"
Usage: 
Query only
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"RLC Throughput (Softkey)"
Top