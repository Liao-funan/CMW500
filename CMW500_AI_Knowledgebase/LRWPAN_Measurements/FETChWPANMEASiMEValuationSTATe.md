# FETChWPANMEASiMEValuationSTATe

Module: LRWPAN Measurements
Source: 8f9843756813473f.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:WPAN:MEAS<i>:MEValuation:STATe?
FETCh:WPAN:MEAS<i>:MEValuation:STATe? 
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
 Measurement has been terminated, valid results may be available
*RST:
OFF
Example: 
See 
"Performing Single Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Manual operation: 
See 
"Multi-Evaluation (Softkey)"
Top