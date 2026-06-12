# FETChWCDMaMEASiNBMEValuationSTATe

Module: WCDMA NodeB Measurements
Source: f067e666e2af41a9.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:WCDMa:MEAS<i>:NB:MEValuation:STATe?
FETCh:WCDMa:MEAS<i>:NB:MEValuation:STATe? 
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
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Multi Evaluation (Softkey)"
Top