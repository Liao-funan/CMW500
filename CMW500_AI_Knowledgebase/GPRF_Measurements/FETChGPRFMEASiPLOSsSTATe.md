# FETChGPRFMEASiPLOSsSTATe

Module: GPRF Measurements
Source: da27dd077c5e4b96.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:GPRF:MEAS<i>:PLOSs:STATe?
FETCh:GPRF:MEAS<i>:PLOSs:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
Return values: 
<MeasState>
OFF |
 
 RUN |
 
 RDY
OFF:
 measurement off, no resources allocated
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement finished
*RST:
OFF
Usage: 
Query only
Firmware/Software: 
V3.7.21
Manual operation: 
See 
"Pathloss (softkey)"
Top