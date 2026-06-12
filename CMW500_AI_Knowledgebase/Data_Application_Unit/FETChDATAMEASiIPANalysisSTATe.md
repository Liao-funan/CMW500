# FETChDATAMEASiIPANalysisSTATe

Module: Data Application Unit
Source: d28c0f81881943c7.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Application Control and States, Database Export
 > 
FETCh:DATA:MEAS<i>:IPANalysis:STATe?
FETCh:DATA:MEAS<i>:IPANalysis:STATe? 
Queries the main measurement state. Use 
FETCh:...:STATe:ALL?
 to query the measurement state including the substates. Use 
INITiate..., STOP..., ABORt...
to change the measurement state.
Return values: 
<MeasState>
OFF |
 
 RUN |
 
 RDY
OFF:
 measurement off, no resources allocated, no results
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement terminated, valid results can be available
*RST:
OFF
Usage: 
Query only
Firmware/Software: 
V3.2.11
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Measurement control"
Top