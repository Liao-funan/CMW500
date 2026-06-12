# INITiateLTEMEASiPRACh

Module: LTE Measurements
Source: 1bfe9bcb58e24d4f.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:LTE:MEAS<i>:PRACh
INITiate:LTE:MEAS<i>:PRACh
STOP:LTE:MEAS<i>:PRACh
ABORt:LTE:MEAS<i>:PRACh
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
"Single-Shot and Continuous Measurements"
Usage: 
Event
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"PRACH (Softkey)"
Top