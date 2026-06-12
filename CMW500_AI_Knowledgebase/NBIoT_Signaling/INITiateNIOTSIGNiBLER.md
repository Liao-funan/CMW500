# INITiateNIOTSIGNiBLER

Module: NBIoT Signaling
Source: 59403f30ff0149fa.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Command Reference
 > 
BLER Measurement
 > 
Measurement Control and States
 > 
INITiate:NIOT:SIGN<i>:BLER
INITiate:NIOT:SIGN<i>:BLER
STOP:NIOT:SIGN<i>:BLER
ABORt:NIOT:SIGN<i>:BLER
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
V3.7.20
Manual operation: 
See 
"BLER (Softkey)"
Top