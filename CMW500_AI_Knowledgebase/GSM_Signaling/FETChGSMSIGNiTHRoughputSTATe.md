# FETChGSMSIGNiTHRoughputSTATe

Module: GSM Signaling
Source: b016520a3fb94e0b.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Control and States
 > 
FETCh:GSM:SIGN<i>:THRoughput:STATe?
FETCh:GSM:SIGN<i>:THRoughput:STATe? 
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
V3.2.20
Manual operation: 
See 
"RLC Throughput (Softkey)"
Top