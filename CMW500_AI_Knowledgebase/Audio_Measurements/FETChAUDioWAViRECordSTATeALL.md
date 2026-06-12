# FETChAUDioWAViRECordSTATeALL

Module: Audio Measurements
Source: 048fc270174a48a5.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Waveform Recording
 > 
Recording Control and States
 > 
FETCh:AUDio:WAV<i>:RECord:STATe:ALL?
FETCh:AUDio:WAV<i>:RECord:STATe:ALL? 
Queries the main recording state and the substates. Both substates are relevant for running recordings only. Use 
FETCh:...:STATe?
 to query the main state only. Use 
INITiate..., STOP..., ABORt...
 to change the state.
Return values: 
<MainState>
OFF |
 
 RUN |
 
 RDY
OFF:
 recording off
RUN:
 recording running
RDY:
 recording paused
*RST:
OFF
<SyncState>
PEND |
 
 ADJ |
 
 INV
PEND:
 waiting for resource allocation, adjustment, hardware switching ("pending")
ADJ:
 adjustments finished, recording running ("adjusted")
INV:
 not applicable, <MainState> OFF or RDY ("invalid")
<ResourceState>
QUE |
 
 ACT |
 
 INV
QUE:
 no resources available ("queued")
ACT:
 resources allocated, acquisition of results in progress but not complete ("active")
INV:
 not applicable, <MainState> OFF or RDY ("invalid")
Usage: 
Query only
Firmware/Software: 
V3.7.20
Manual operation: 
See 
"Record softkey"
Top