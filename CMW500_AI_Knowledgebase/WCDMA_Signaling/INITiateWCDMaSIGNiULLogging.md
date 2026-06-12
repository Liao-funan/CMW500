# INITiateWCDMaSIGNiULLogging

Module: WCDMA Signaling
Source: b0e2c30b66d0498f.htm

## 原始指令文档说明
WCDMA Signaling
 > 
Command Reference
 > 
UL Logging Measurement
 > 
Measurement Control and States
 > 
INITiate:WCDMa:SIGN<i>:ULLogging
INITiate:WCDMa:SIGN<i>:ULLogging
STOP:WCDMa:SIGN<i>:ULLogging
ABORt:WCDMa:SIGN<i>:ULLogging
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
"UL Logging Tests"
Usage: 
Event
Firmware/Software: 
V3.0.30
Options: 
R&S CMW-KS401
Manual operation: 
See 
"UL Logging (softkey)"
Top