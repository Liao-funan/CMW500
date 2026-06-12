# INITiateWCDMaSIGNiEAGCh

Module: WCDMA Signaling
Source: d7b97a32f7894727.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-AGCH Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:EAGCh
INITiate:WCDMa:SIGN<i>:EAGCh
STOP:WCDMa:SIGN<i>:EAGCh
ABORt:WCDMa:SIGN<i>:EAGCh
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
"Performing an E-AGCH Measurement"
Usage: 
Event
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSUPA E-AGCH (Softkey)"
Top