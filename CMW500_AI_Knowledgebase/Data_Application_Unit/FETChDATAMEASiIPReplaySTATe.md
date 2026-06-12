# FETChDATAMEASiIPReplaySTATe

Module: Data Application Unit
Source: e727140feed24150.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Application Control and States
 > 
FETCh:DATA:MEAS<i>:IPReplay:STATe?
FETCh:DATA:MEAS<i>:IPReplay:STATe? 
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
 measurement off, no resources allocated, no results
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement terminated, valid results can be available
*RST:
OFF
Example: 
See 
"Performing IP Replay"
Usage: 
Query only
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Application control"
Top