# FETChWCDMaSIGNiHCQISTATe

Module: WCDMA Signaling
Source: 123e2a7ed1ba45e2.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Control and States
 > 
FETCh:WCDMa:SIGN<i>:HCQI:STATe?
FETCh:WCDMa:SIGN<i>:HCQI:STATe? 
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
"Performing an HSDPA CQI Measurement"
Usage: 
Query only
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS411
Manual operation: 
See 
"HSDPA CQI (Softkey)"
Top