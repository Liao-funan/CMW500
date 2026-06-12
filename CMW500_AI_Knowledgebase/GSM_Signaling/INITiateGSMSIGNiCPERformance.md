# INITiateGSMSIGNiCPERformance

Module: GSM Signaling
Source: eab0d3e569804e03.htm

## 原始指令文档说明
GSM Signaling
 > 
Command Reference
 > 
CMR Performance Measurement
 > 
Measurement Control and States
 > 
INITiate:GSM:SIGN<i>:CPERformance
INITiate:GSM:SIGN<i>:CPERformance
STOP:GSM:SIGN<i>:CPERformance
ABORt:GSM:SIGN<i>:CPERformance
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
"CMR Performance Tests"
Usage: 
Event
Firmware/Software: 
V3.2.30
Options: 
R&S CMW-KS210
Manual operation: 
See 
"CMR Performance (Softkey)"
Top