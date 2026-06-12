# INITiateGSMSIGNiBERCSWitched

Module: GSM Signaling
Source: 580a4be7173743c1.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
BER CS Measurement
 > 
Measurement Control and States
 > 
INITiate:GSM:SIGN<i>:BER:CSWitched
INITiate:GSM:SIGN<i>:BER:CSWitched
STOP:GSM:SIGN<i>:BER:CSWitched
ABORt:GSM:SIGN<i>:BER:CSWitched
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
V1.0.15.0
Manual operation: 
See 
"BER Circuit Switched (Softkey)"
Top