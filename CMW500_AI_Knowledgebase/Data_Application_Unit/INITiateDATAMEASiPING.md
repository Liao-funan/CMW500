# INITiateDATAMEASiPING

Module: Data Application Unit
Source: dccea715a97543cb.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Ping Measurement
 > 
INITiate:DATA:MEAS<i>:PING
INITiate:DATA:MEAS<i>:PING
STOP:DATA:MEAS<i>:PING
ABORt:DATA:MEAS<i>:PING
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
"Performing a Ping Measurement"
Usage: 
Event
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Measurement control"
Top