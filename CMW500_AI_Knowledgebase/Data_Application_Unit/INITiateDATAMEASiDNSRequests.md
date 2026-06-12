# INITiateDATAMEASiDNSRequests

Module: Data Application Unit
Source: 0e40fde071a04699.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
DNS Requests Measurement
 > 
INITiate:DATA:MEAS<i>:DNSRequests
INITiate:DATA:MEAS<i>:DNSRequests
STOP:DATA:MEAS<i>:DNSRequests
ABORt:DATA:MEAS<i>:DNSRequests
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
"Monitoring DNS Requests"
Usage: 
Event
Firmware/Software: 
V3.0.10
Manual operation: 
See 
"Measurement control"
Top