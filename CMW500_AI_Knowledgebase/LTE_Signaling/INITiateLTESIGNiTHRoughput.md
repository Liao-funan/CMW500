# INITiateLTESIGNiTHRoughput

Module: LTE Signaling
Source: b650602617164eaa.htm

## 原始指令文档说明
LTE Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Control and States
 > 
INITiate:LTE:SIGN<i>:THRoughput
INITiate:LTE:SIGN<i>:THRoughput
STOP:LTE:SIGN<i>:THRoughput
ABORt:LTE:SIGN<i>:THRoughput
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
"Performing an RLC Throughput Measurement"
Usage: 
Event
Firmware/Software: 
V3.2.80
Manual operation: 
See 
"RLC Throughput (Softkey)"
Top