# INITiateWCDMaSIGNiHACK

Module: WCDMA Signaling
Source: 6533aea8a3e946bf.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA ACK Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:HACK
INITiate:WCDMa:SIGN<i>:HACK
STOP:WCDMa:SIGN<i>:HACK
ABORt:WCDMa:SIGN<i>:HACK
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
"Performing an HSDPA ACK Measurement"
Usage: 
Event
Firmware/Software: 
V2.1.20
Options: 
R&S CMW-KS401
Manual operation: 
See 
"HSDPA ACK (Softkey)"
Top