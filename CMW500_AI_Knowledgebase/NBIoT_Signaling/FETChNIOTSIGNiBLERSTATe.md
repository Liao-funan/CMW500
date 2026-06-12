# FETChNIOTSIGNiBLERSTATe

Module: NBIoT Signaling
Source: c452daac77ad4c87.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Control and States
 > 
FETCh:NIOT:SIGN<i>:BLER:STATe?
FETCh:NIOT:SIGN<i>:BLER:STATe? 
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
V3.7.20
Manual operation: 
See 
"BLER (Softkey)"
Top