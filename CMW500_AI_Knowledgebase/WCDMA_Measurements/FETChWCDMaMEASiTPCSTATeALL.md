# FETChWCDMaMEASiTPCSTATeALL

Module: WCDMA Measurements
Source: d17c5a96d6044271.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:WCDMa:MEAS<i>:TPC:STATe:ALL?
FETCh:WCDMa:MEAS<i>:TPC:STATe:ALL? 
Queries the main measurement state and the measurement substates. Both measurement substates are relevant for running measurements only. Use 
FETCh:...:STATe?
 to query the main measurement state only. Use 
INITiate..., STOP..., ABORt...
 to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<MainState>
OFF |
 
 RDY |
 
 RUN
OFF:
 measurement switched off, no resources allocated, no results available (when entered after 
STOP...
)
RDY:
 measurement has been terminated, valid results are available
RUN:
 measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
*RST:
OFF
<SyncState>
PEND |
 
 ADJ |
 
 INV
PEND:
 waiting for resource allocation, adjustment, hardware switching ("pending")
ADJ:
 all necessary adjustments finished, measurement running ("adjusted")
INV:
 not applicable because <MainState>: OFF or RDY ("invalid")
<RessourceState>
QUE |
 
 ACT |
 
 INV
QUE:
 measurement without resources, no results available ("queued")
ACT:
 resources allocated, acquisition of results in progress but not complete ("active")
INV:
 not applicable because <MainState>: OFF or RDY ("invalid")
Usage: 
Query only
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"TPC Meas. (Softkey)"
Top