# INITiateLTEMEASiSRS

Module: LTE Measurements
Source: 3d89a7bd15e144f3.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE SRS Measurement
 > 
Command Reference
 > 
SRS Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:LTE:MEAS<i>:SRS
INITiate:LTE:MEAS<i>:SRS
STOP:LTE:MEAS<i>:SRS
ABORt:LTE:MEAS<i>:SRS
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
"Single-Shot and Continuous Measurements"
Usage: 
Event
Firmware/Software: 
V2.0.20
Manual operation: 
See 
"SRS (Softkey)"
Top