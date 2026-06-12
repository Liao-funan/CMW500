# INITiateDATAMEASiIPERf

Module: Data Application Unit
Source: a6f829147bf34007.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Iperf Measurement
 > 
INITiate:DATA:MEAS<i>:IPERf
INITiate:DATA:MEAS<i>:IPERf
STOP:DATA:MEAS<i>:IPERf
ABORt:DATA:MEAS<i>:IPERf
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
"Performing an Iperf Measurement"
Usage: 
Event
Firmware/Software: 
V1.0.15.20
Manual operation: 
See 
"Measurement control"
Top