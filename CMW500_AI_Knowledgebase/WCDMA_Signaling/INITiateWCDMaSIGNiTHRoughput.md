# INITiateWCDMaSIGNiTHRoughput

Module: WCDMA Signaling
Source: 69efb69b2b56405e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:THRoughput
INITiate:WCDMa:SIGN<i>:THRoughput
STOP:WCDMa:SIGN<i>:THRoughput
ABORt:WCDMa:SIGN<i>:THRoughput
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
V3.0.20
Manual operation: 
See 
"RLC Throughput (Softkey)"
Top