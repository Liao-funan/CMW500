# INITiateWCDMaSIGNiHCQI

Module: WCDMA Signaling
Source: 8551da8d58fc402c.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
HSDPA CQI Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:HCQI
INITiate:WCDMa:SIGN<i>:HCQI
STOP:WCDMa:SIGN<i>:HCQI
ABORt:WCDMa:SIGN<i>:HCQI
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
"Performing an HSDPA CQI Measurement"
Usage: 
Event
Firmware/Software: 
V3.2.80
Options: 
R&S CMW-KS411
Manual operation: 
See 
"HSDPA CQI (Softkey)"
Top