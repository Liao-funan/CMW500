# INITiateWCDMaSIGNiERGCh

Module: WCDMA Signaling
Source: 2969ea3ba3b544ef.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
E-RGCH Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:ERGCh
INITiate:WCDMa:SIGN<i>:ERGCh
STOP:WCDMa:SIGN<i>:ERGCh
ABORt:WCDMa:SIGN<i>:ERGCh
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
"E-RGCH Tests"
Usage: 
Event
Firmware/Software: 
V3.5.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSUPA E-RGCH (Softkey)"
Top