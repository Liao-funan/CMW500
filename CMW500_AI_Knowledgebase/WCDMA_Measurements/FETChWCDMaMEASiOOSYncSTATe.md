# FETChWCDMaMEASiOOSYncSTATe

Module: WCDMA Measurements
Source: ae3c7a8e9e334944.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Out-Of-Sync Handling Measurement
 > 
Command Reference
 > 
Out-Of-Sync Handling Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:WCDMa:MEAS<i>:OOSYnc:STATe?
FETCh:WCDMa:MEAS<i>:OOSYnc:STATe? 
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
Example: 
See 
"Performing Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.50
Manual operation: 
See 
"Out-of-Sync (Softkey)"
Top