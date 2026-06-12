# INITiateGSMSIGNiBLER

Module: GSM Signaling
Source: 7ba0addd18484cfa.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Control and States
 > 
INITiate:GSM:SIGN<i>:BLER
INITiate:GSM:SIGN<i>:BLER
STOP:GSM:SIGN<i>:BLER
ABORt:GSM:SIGN<i>:BLER
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
Usage: 
Event
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"BLER (Softkey)"
Top