# INITiateGPRFMEASiPOWer

Module: GPRF Measurements
Source: 35a87523c0064974.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Power Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:GPRF:MEAS<i>:POWer
INITiate:GPRF:MEAS<i>:POWer
STOP:GPRF:MEAS<i>:POWer
ABORt:GPRF:MEAS<i>:POWer
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
"Single-Shot and Continuous Power Measurements"
Usage: 
Event
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Power (Softkey)"
Top