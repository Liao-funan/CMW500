# FETChWCDMaSIGNiHACKSTATe

Module: WCDMA Signaling
Source: 76335507324f42e9.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Control and States
 > 
FETCh:WCDMa:SIGN<i>:HACK:STATe?
FETCh:WCDMa:SIGN<i>:HACK:STATe? 
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
"Performing an HSDPA ACK Measurement"
Usage: 
Query only
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSDPA ACK (Softkey)"
Top