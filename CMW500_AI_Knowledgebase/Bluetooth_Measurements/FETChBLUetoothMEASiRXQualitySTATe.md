# FETChBLUetoothMEASiRXQualitySTATe

Module: Bluetooth Measurements
Source: bdaa7f56b8d848f6.htm

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
FETCh:BLUetooth:MEAS<i>:RXQuality:STATe?
FETCh:BLUetooth:MEAS<i>:RXQuality:STATe? 
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
 
 RDY |
 
 RUN
OFF:
 measurement switched off, no resources allocated, no results available (when entered after 
ABORt...
)
RDY:
 measurement has been terminated, valid results are available
RUN:
 measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
*RST:
OFF
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