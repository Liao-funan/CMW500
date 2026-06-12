# INITiateWCDMaSIGNiEHICh

Module: WCDMA Signaling
Source: 158a4c817f61483e.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-HICH Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:EHICh
INITiate:WCDMa:SIGN<i>:EHICh
STOP:WCDMa:SIGN<i>:EHICh
ABORt:WCDMa:SIGN<i>:EHICh
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
"Performing an E-HICH Measurement"
Usage: 
Event
Firmware/Software: 
V3.0.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSUPA E-HICH (Softkey)"
Top