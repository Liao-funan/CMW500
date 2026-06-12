# INITiateGSMSIGNiTHRoughput

Module: GSM Signaling
Source: 404a9004cf9d4d48.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
RLC Throughput Measurement
 > 
Measurement Control and States
 > 
INITiate:GSM:SIGN<i>:THRoughput
INITiate:GSM:SIGN<i>:THRoughput
STOP:GSM:SIGN<i>:THRoughput
ABORt:GSM:SIGN<i>:THRoughput
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
V3.2.20
Manual operation: 
See 
"RLC Throughput (Softkey)"
Top