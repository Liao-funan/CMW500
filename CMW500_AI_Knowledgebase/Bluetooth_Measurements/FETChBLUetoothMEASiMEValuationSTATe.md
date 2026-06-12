# FETChBLUetoothMEASiMEValuationSTATe

Module: Bluetooth Measurements
Source: 6362089374464db8.htm

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
FETCh:BLUetooth:MEAS<i>:MEValuation:STATe?
FETCh:BLUetooth:MEAS<i>:MEValuation:STATe? 
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
 Measurement switched off, no resources allocated, no results available (when entered after 
ABORt...
)
RUN:
 Measurement running (after 
INITiate..., READ...
), synchronization pending or adjusted, resources active or queued
RDY:
 Measurement has been terminated, valid results are available
*RST:
OFF
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