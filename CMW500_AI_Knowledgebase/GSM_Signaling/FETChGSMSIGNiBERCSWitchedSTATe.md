# FETChGSMSIGNiBERCSWitchedSTATe

Module: GSM Signaling
Source: 7ca6a89399f74f72.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER CS Measurement
 > 
Measurement Control and States
 > 
FETCh:GSM:SIGN<i>:BER:CSWitched:STATe?
FETCh:GSM:SIGN<i>:BER:CSWitched:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<MeasStatus>
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
Usage: 
Query only
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"BER Circuit Switched (Softkey)"
Top