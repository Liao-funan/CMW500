# FETChGSMSIGNiCPERformanceSTATe

Module: GSM Signaling
Source: 4cd0319228524eef.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
CMR Performance Measurement
 > 
Measurement Control and States
 > 
FETCh:GSM:SIGN<i>:CPERformance:STATe?
FETCh:GSM:SIGN<i>:CPERformance:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
See also: 
"Measurement Control"
Return values: 
<State>
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
"CMR Performance Tests"
Usage: 
Query only
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS210
Manual operation: 
See 
"CMR Performance (Softkey)"
Top