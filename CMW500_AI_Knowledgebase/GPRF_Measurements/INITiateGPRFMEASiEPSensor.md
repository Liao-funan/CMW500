# INITiateGPRFMEASiEPSensor

Module: GPRF Measurements
Source: 6cb2d16188a848a2.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
External Power Sensor Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:GPRF:MEAS<i>:EPSensor
INITiate:GPRF:MEAS<i>:EPSensor
STOP:GPRF:MEAS<i>:EPSensor
ABORt:GPRF:MEAS<i>:EPSensor
Starts, stops, or aborts the measurement:
INITiate...
 starts or restarts the measurement. The measurement enters the "RUN" state.
STOP...
 halts the measurement immediately. The measurement enters the "RDY" state. Measurement results are kept. The resources remain allocated to the measurement.
ABORt...
 halts the measurement immediately. The measurement enters the "OFF" state. All measurement values are set to NAV. Allocated resources are released.
Use 
FETCh...STATe?
 to query the current measurement state.
See also: 
"Measurement Control"
Example: 
See 
"Performing a Single-Shot Measurement"
Usage: 
Event
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"EPS (Softkey)"
Top