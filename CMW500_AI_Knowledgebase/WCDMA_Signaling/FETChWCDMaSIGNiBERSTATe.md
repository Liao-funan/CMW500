# FETChWCDMaSIGNiBERSTATe

Module: WCDMA Signaling
Source: c735239ce5d04972.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
BER Measurement
 > 
Measurement Control and States
 > 
FETCh:WCDMa:SIGN<i>:BER:STATe?
FETCh:WCDMa:SIGN<i>:BER:STATe? 
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
"Performing a BER Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"BER (Softkey)"
Top