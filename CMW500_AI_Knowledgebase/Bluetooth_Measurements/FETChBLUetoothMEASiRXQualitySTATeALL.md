# FETChBLUetoothMEASiRXQualitySTATeALL

Module: Bluetooth Measurements
Source: 40f62dbfc20244e1.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Rx Measurement
 > 
Measurement Control and States
 > 
FETCh:BLUetooth:MEAS<i>:RXQuality:STATe:ALL?
FETCh:BLUetooth:MEAS<i>:RXQuality:STATe:ALL? 
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
 not applicable because <main_state>: OFF or RDY ("invalid")
<ResourceState>
QUE |
 
 ACT |
 
 INV
QUE:
 measurement without resources, no results available ("queued")
ACT:
 resources allocated, acquisition of results in progress but not complete ("active")
INV:
 not applicable because <main_state>: OFF or RDY ("invalid")
Example: 
See 
"Performing an Rx Measurement"
Usage: 
Query only
Firmware/Software: 
V3.7.20
Options: 
R&S CMW-KD611
Manual operation: 
See 
"Rx Meas (Softkey)"
Top