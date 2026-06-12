# INITiateDATAMEASiIPANalysis

Module: Data Application Unit
Source: cf14371ef00146ea.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
IP Analysis and Security
 > 
Application Control and States, Database Export
 > 
INITiate:DATA:MEAS<i>:IPANalysis
INITiate:DATA:MEAS<i>:IPANalysis
STOP:DATA:MEAS<i>:IPANalysis
ABORt:DATA:MEAS<i>:IPANalysis
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
"Performing IP Analysis"
Usage: 
Event
Firmware/Software: 
V3.2.11
Options: 
R&S CMW-KM051
Manual operation: 
See 
"Measurement control"
Top