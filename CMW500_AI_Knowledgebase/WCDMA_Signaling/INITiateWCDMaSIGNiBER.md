# INITiateWCDMaSIGNiBER

Module: WCDMA Signaling
Source: 152b5a6f21884580.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
BER Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:BER
INITiate:WCDMa:SIGN<i>:BER
STOP:WCDMa:SIGN<i>:BER
ABORt:WCDMa:SIGN<i>:BER
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
"Performing a BER Measurement"
Usage: 
Event
Firmware/Software: 
V1.0.15.0
Manual operation: 
See 
"BER (Softkey)"
Top