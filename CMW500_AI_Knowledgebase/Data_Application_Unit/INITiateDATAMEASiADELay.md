# INITiateDATAMEASiADELay

Module: Data Application Unit
Source: 1f022f5ad30c483f.htm

## 原始指令文档说明
Data Application Unit
 > 
DAU Measurements Command Reference
 > 
Audio Delay Measurement
 > 
INITiate:DATA:MEAS<i>:ADELay
INITiate:DATA:MEAS<i>:ADELay
STOP:DATA:MEAS<i>:ADELay
ABORt:DATA:MEAS<i>:ADELay
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
"Performing an Audio Delay Measurement"
Usage: 
Event
Firmware/Software: 
V3.5.20
Manual operation: 
See 
"Measurement control"
Top