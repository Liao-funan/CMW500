# FETChWCDMaMEASiPRAChSTATe

Module: WCDMA Measurements
Source: 3c4c19beb5434633.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:WCDMa:MEAS<i>:PRACh:STATe?
FETCh:WCDMa:MEAS<i>:PRACh:STATe? 
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
 measurement switched off, no resources allocated, no results available (when entered after 
ABORt...
)
RUN:
 measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
RDY:
 measurement has been terminated, valid results are available
*RST:
OFF
Usage: 
Query only
Firmware/Software: 
V3.0.20
Manual operation: 
See 
"PRACH (Softkey)"
Top