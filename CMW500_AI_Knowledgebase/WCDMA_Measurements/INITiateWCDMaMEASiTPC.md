# INITiateWCDMaMEASiTPC

Module: WCDMA Measurements
Source: a6ea8608feb94d7b.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA TPC Measurement
 > 
Command Reference
 > 
TPC Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WCDMa:MEAS<i>:TPC
INITiate:WCDMa:MEAS<i>:TPC
STOP:WCDMa:MEAS<i>:TPC
ABORt:WCDMa:MEAS<i>:TPC
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
"Performing Measurements"
Usage: 
Event
Firmware/Software: 
V2.1.20
Manual operation: 
See 
"TPC Meas. (Softkey)"
Top