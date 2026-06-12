# FETChGSMSIGNiBLERSTATe

Module: GSM Signaling
Source: 79fb5d73bf1c41b0.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Control and States
 > 
FETCh:GSM:SIGN<i>:BLER:STATe?
FETCh:GSM:SIGN<i>:BLER:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<MeasStatus>
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
Usage: 
Query only
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"BLER (Softkey)"
Top