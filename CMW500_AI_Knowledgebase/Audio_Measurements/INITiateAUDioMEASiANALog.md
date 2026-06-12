# INITiateAUDioMEASiANALog

Module: Audio Measurements
Source: 1d1e6f67937c46af.htm

## 原始指令文档说明
Audio Measurements
 > 
Command Reference
 > 
Audio Measurements
 > 
Measurement Control and States
 > 
INITiate:AUDio:MEAS<i>:ANALog
INITiate:AUDio:MEAS<i>:ANALog
STOP:AUDio:MEAS<i>:ANALog
ABORt:AUDio:MEAS<i>:ANALog
INITiate:AUDio:MEAS<i>:DIGital
STOP:AUDio:MEAS<i>:DIGital
ABORt:AUDio:MEAS<i>:DIGital
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
"Single Tone Measurement"
Usage: 
Event
Firmware/Software: 
V3.2.10
Manual operation: 
See 
"Digital Meas softkey"
Top