# FETChLTESIGNiEBLerSTATe

Module: LTE Signaling
Source: c5d899ae2f704748.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Control and States
 > 
FETCh:LTE:SIGN<i>:EBLer:STATe?
FETCh:LTE:SIGN<i>:EBLer:STATe? 
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
Usage: 
Query only
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Extended BLER (Softkey)"
Top