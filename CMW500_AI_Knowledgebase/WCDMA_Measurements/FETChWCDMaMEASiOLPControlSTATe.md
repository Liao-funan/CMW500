# FETChWCDMaMEASiOLPControlSTATe

Module: WCDMA Measurements
Source: e0ec48d798ee4b41.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA DPCCH Open Loop Power Measurement
 > 
Command Reference
 > 
DPCCH Open Loop Power Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:WCDMa:MEAS<i>:OLPControl:STATe?
FETCh:WCDMa:MEAS<i>:OLPControl:STATe? 
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
V3.5.20
Manual operation: 
See 
"DPCCH OLP (Softkey)"
Top