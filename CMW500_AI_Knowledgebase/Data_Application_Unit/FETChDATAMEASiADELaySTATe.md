# FETChDATAMEASiADELaySTATe

Module: Data Application Unit
Source: a6b0fd61967a413e.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Audio Delay Measurement
 > 
FETCh:DATA:MEAS<i>:ADELay:STATe?
FETCh:DATA:MEAS<i>:ADELay:STATe? 
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
V3.5.20
Manual operation: 
See 
"Measurement control"
Top