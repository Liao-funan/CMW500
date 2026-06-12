# INITiateDATAMEASiIPReplay

Module: Data Application Unit
Source: 2e105857baa444d4.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Replay
 > 
Application Control and States
 > 
INITiate:DATA:MEAS<i>:IPReplay
INITiate:DATA:MEAS<i>:IPReplay
STOP:DATA:MEAS<i>:IPReplay
ABORt:DATA:MEAS<i>:IPReplay
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
"Performing IP Replay"
Usage: 
Event
Firmware/Software: 
V3.2.50
Manual operation: 
See 
"Application control"
Top