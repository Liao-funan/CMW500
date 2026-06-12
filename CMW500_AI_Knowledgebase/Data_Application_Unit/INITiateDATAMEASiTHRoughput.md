# INITiateDATAMEASiTHRoughput

Module: Data Application Unit
Source: 563d7f3d47ff418f.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Throughput Measurement
 > 
INITiate:DATA:MEAS<i>:THRoughput
INITiate:DATA:MEAS<i>:THRoughput
STOP:DATA:MEAS<i>:THRoughput
ABORt:DATA:MEAS<i>:THRoughput
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
"Performing a Throughput Measurement"
Usage: 
Event
Firmware/Software: 
V2.0.10
Manual operation: 
See 
"Measurement control"
Top