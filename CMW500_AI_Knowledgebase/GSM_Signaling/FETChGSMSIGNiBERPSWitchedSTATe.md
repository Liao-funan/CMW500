# FETChGSMSIGNiBERPSWitchedSTATe

Module: GSM Signaling
Source: 7f9ecca91c8342a6.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER PS Measurement
 > 
Measurement Control and States
 > 
FETCh:GSM:SIGN<i>:BER:PSWitched:STATe?
FETCh:GSM:SIGN<i>:BER:PSWitched:STATe? 
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
V2.0.20
Manual operation: 
See 
"BER Packet Switched (Softkey)"
Top