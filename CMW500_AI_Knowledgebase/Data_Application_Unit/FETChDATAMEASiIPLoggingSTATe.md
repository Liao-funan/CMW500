# FETChDATAMEASiIPLoggingSTATe

Module: Data Application Unit
Source: 5ff1828240824260.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Logging
 > 
FETCh:DATA:MEAS<i>:IPLogging:STATe?
FETCh:DATA:MEAS<i>:IPLogging:STATe? 
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
Example: 
See 
"Performing IP Logging"
Usage: 
Query only
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Logging control"
Top