# INITiateWLANSIGNiPER

Module: WLAN Signaling
Source: 505a3a45f5f84f10.htm

## 原始指令文档说明
WLAN Signaling
 > 
Command Reference
 > 
PER Measurement
 > 
Measurement Control and States
 > 
INITiate:WLAN:SIGN<i>:PER
INITiate:WLAN:SIGN<i>:PER
STOP:WLAN:SIGN<i>:PER
ABORt:WLAN:SIGN<i>:PER
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
"Running a PER Measurement"
Usage: 
Event
Firmware/Software: 
V2.1.30
Manual operation: 
See 
"PER (Softkey)"
Top