# FETChGPRFMEASiEPSensorSTATe

Module: GPRF Measurements
Source: 58a3c573964e4711.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
External Power Sensor Measurement Commands
 > 
Measurement Control and States
 > 
FETCh:GPRF:MEAS<i>:EPSensor:STATe?
FETCh:GPRF:MEAS<i>:EPSensor:STATe? 
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
 measurement off, no resources allocated, no results
RUN:
 measurement running, synchronization pending or adjusted, resources active or queued
RDY:
 measurement finished
*RST:
OFF
Example: 
See 
"Performing a Single-Shot Measurement"
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"EPS (Softkey)"
Top