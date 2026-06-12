# FETChGPRFMEASiPOWerSTATe

Module: GPRF Measurements
Source: 48af45d39c794ccc.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:GPRF:MEAS<i>:POWer:STATe?
FETCh:GPRF:MEAS<i>:POWer:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<MeasState>
OFF |
 
 RUN |
 
 RDY
OFF:
 measurement off, no resources allocated, no results
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement finished
*RST:
OFF
Example: 
See 
"Single-Shot and Continuous Power Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Power (Softkey)"
Top