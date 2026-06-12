# FETChAUDioMEASiANALogSTATe

Module: Audio Measurements
Source: 6094f8ef7ddb4941.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Measurement Control and States
 > 
FETCh:AUDio:MEAS<i>:ANALog:STATe?
FETCh:AUDio:MEAS<i>:ANALog:STATe? 
FETCh:AUDio:MEAS<i>:DIGital:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
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
"Single Tone Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Digital Meas softkey"
Top