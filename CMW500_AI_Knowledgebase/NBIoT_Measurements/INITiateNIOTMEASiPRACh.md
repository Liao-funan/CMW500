# INITiateNIOTMEASiPRACh

Module: NBIoT Measurements
Source: 51b2f382dbd844eb.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Command Reference
 > 
NPRACH Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:NIOT:MEAS<i>:PRACh
INITiate:NIOT:MEAS<i>:PRACh
STOP:NIOT:MEAS<i>:PRACh
ABORt:NIOT:MEAS<i>:PRACh
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
V3.7.20
Manual operation: 
See 
"NPRACH (Softkey)"
Top