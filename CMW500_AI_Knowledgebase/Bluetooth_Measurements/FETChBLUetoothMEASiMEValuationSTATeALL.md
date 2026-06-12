# FETChBLUetoothMEASiMEValuationSTATeALL

Module: Bluetooth Measurements
Source: 1a7887776b3249af.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Command Reference
 > 
Bluetooth Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:BLUetooth:MEAS<i>:MEValuation:STATe:ALL?
FETCh:BLUetooth:MEAS<i>:MEValuation:STATe:ALL? 
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
 Measurement switched off, no resources allocated, no results available (when entered after 
STOP...
)
RDY:
 Measurement has been terminated, valid results are available
RUN:
 Measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
*RST:
OFF
<SyncState>
PEND |
 
 ADJ |
 
 INV
PEND:
 Waiting for resource allocation, adjustment, hardware switching ("pending")
ADJ:
 All necessary adjustments finished, measurement running ("adjusted")
INV:
 Not applicable because <main_state>: OFF or RDY ("invalid")
<ResourceState>
QUE |
 
 ACT |
 
 INV
QUE:
 Measurement without resources, no results available ("queued")
ACT:
 Resources allocated, acquisition of results in progress but not complete ("active")
INV:
 Not applicable because <main_state>: OFF or RDY ("invalid")
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V1.0.10.1
Manual operation: 
See 
"Multi Evaluation (Softkey)"
Top