# FETChGPRFMEASiPLOSsSTATeALL

Module: GPRF Measurements
Source: 9e28a0cda60b49e7.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:GPRF:MEAS<i>:PLOSs:STATe:ALL?
FETCh:GPRF:MEAS<i>:PLOSs:STATe:ALL? 
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
 measurement off, no resources allocated
RUN:
 measurement running, substates apply
RDY:
 measurement finished
*RST:
OFF
<SyncState>
PEND |
 
 ADJ |
 
 INV
PEND:
 waiting for resource allocation, adjustment, hardware switching
ADJ:
 adjusted, measurement running
INV:
 state not applicable, <MainState> OFF or RDY
<ResourceState>
QUE |
 
 ACT |
 
 INV
QUE:
 measurement without resources
ACT:
 resources allocated, acquisition of results in progress
INV:
 state not applicable, <MainState> OFF or RDY
Usage: 
Query only
Firmware/Software: 
V3.7.21
Manual operation: 
See 
"Pathloss (softkey)"
Top