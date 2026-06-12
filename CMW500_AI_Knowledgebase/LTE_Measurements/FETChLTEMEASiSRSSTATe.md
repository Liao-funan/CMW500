# FETChLTEMEASiSRSSTATe

Module: LTE Measurements
Source: dc30f470d6ed42bd.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE SRS Measurement
 > 
Command Reference
 > 
SRS Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:LTE:MEAS<i>:SRS:STATe?
FETCh:LTE:MEAS<i>:SRS:STATe? 
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
 measurement terminated, valid results can be available
*RST:
OFF
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"SRS (Softkey)"
Top