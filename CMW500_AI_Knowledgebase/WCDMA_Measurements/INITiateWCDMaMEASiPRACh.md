# INITiateWCDMaMEASiPRACh

Module: WCDMA Measurements
Source: 4c90d6d35b264a3b.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Command Reference
 > 
PRACH Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WCDMa:MEAS<i>:PRACh
INITiate:WCDMa:MEAS<i>:PRACh
STOP:WCDMa:MEAS<i>:PRACh
ABORt:WCDMa:MEAS<i>:PRACh
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
V3.0.20
Manual operation: 
See 
"PRACH (Softkey)"
Top