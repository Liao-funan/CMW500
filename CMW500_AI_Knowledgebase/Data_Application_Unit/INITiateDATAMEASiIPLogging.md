# INITiateDATAMEASiIPLogging

Module: Data Application Unit
Source: cba0c635684245ec.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Logging
 > 
INITiate:DATA:MEAS<i>:IPLogging
INITiate:DATA:MEAS<i>:IPLogging
STOP:DATA:MEAS<i>:IPLogging
ABORt:DATA:MEAS<i>:IPLogging
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
"Performing IP Logging"
Usage: 
Event
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Logging control"
Top