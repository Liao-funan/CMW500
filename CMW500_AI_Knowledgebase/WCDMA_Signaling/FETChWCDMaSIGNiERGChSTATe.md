# FETChWCDMaSIGNiERGChSTATe

Module: WCDMA Signaling
Source: 7a7082c6726e4180.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-RGCH Measurement
 > 
Measurement Control and States
 > 
FETCh:WCDMa:SIGN<i>:ERGCh:STATe?
FETCh:WCDMa:SIGN<i>:ERGCh:STATe? 
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
"E-RGCH Tests"
Usage: 
Query only
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSUPA E-RGCH (Softkey)"
Top