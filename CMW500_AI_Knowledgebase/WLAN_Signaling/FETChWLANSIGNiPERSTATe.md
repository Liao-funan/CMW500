# FETChWLANSIGNiPERSTATe

Module: WLAN Signaling
Source: b0ee7789412244f9.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
PER Measurement
 > 
Measurement Control and States
 > 
FETCh:WLAN:SIGN<i>:PER:STATe?
FETCh:WLAN:SIGN<i>:PER:STATe? 
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
 measurement has been terminated, valid results can be available
RUN:
 measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
*RST:
OFF
Example: 
See 
"Running a PER Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"PER (Softkey)"
Top