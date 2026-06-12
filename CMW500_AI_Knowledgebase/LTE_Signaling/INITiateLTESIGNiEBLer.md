# INITiateLTESIGNiEBLer

Module: LTE Signaling
Source: 3608f12ac7a44d96.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Control and States
 > 
INITiate:LTE:SIGN<i>:EBLer
INITiate:LTE:SIGN<i>:EBLer
STOP:LTE:SIGN<i>:EBLer
ABORt:LTE:SIGN<i>:EBLer
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
"Performing a Single-Shot BLER Measurement"
Usage: 
Event
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Extended BLER (Softkey)"
Top