# FETChGPRFMEASiIQVSlotSTATeALL

Module: GPRF Measurements
Source: 8aa2306faa864a7b.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:GPRF:MEAS<i>:IQVSlot:STATe:ALL?
FETCh:GPRF:MEAS<i>:IQVSlot:STATe:ALL? 
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
 
 RUN |
 
 RDY
OFF:
 measurement off, no resources allocated, no results
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
 measurement without resources, no results available
ACT:
 resources allocated, acquisition of results in progress
INV:
 state not applicable, <MainState> OFF or RDY
Example: 
See 
"Single-Shot and Continuous Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"I/Q vs. Slot (Softkey)"
Top