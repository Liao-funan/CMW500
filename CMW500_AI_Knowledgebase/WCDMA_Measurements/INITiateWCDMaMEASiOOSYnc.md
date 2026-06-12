# INITiateWCDMaMEASiOOSYnc

Module: WCDMA Measurements
Source: 592671ddd30b4b53.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Out-Of-Sync Handling Measurement
 > 
Command Reference
 > 
Out-Of-Sync Handling Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WCDMa:MEAS<i>:OOSYnc
INITiate:WCDMa:MEAS<i>:OOSYnc
STOP:WCDMa:MEAS<i>:OOSYnc
ABORt:WCDMa:MEAS<i>:OOSYnc
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
V3.5.50
Manual operation: 
See 
"Out-of-Sync (Softkey)"
Top