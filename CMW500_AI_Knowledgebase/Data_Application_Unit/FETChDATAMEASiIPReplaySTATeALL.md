# FETChDATAMEASiIPReplaySTATeALL

Module: Data Application Unit
Source: afe6a8c916754b45.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Application Control and States
 > 
FETCh:DATA:MEAS<i>:IPReplay:STATe:ALL?
FETCh:DATA:MEAS<i>:IPReplay:STATe:ALL? 
Queries the main measurement state and the measurement substates. Both measurement substates are relevant for running measurements only. Use 
FETCh:...:STATe?
 to query the main measurement state only. Use 
INITiate..., STOP..., ABORt...
 to change the measurement state.
Return values: 
<MainState>
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
<SyncState>
PEND |
 
 ADJ |
 
 INV
PEND:
 waiting for resource allocation, adjustment, hardware switching ("pending")
ADJ:
 adjustments finished, measurement running ("adjusted")
INV:
 not applicable, <MainState> OFF or RDY ("invalid")
<ResourceState>
QUE |
 
 ACT |
 
 INV
QUE:
 measurement without resources, no results available ("queued")
ACT:
 resources allocated, acquisition of results in progress but not complete ("active")
INV:
 not applicable, <MainState> OFF or RDY ("invalid")
Usage: 
Query only
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Application control"
Top