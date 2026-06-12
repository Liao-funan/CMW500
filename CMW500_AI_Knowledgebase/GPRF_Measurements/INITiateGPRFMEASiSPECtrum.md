# INITiateGPRFMEASiSPECtrum

Module: GPRF Measurements
Source: 5b438bab4d304470.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Spectrum Analyzer Commands
 > 
Measurement Control and States
 > 
INITiate:GPRF:MEAS<i>:SPECtrum
INITiate:GPRF:MEAS<i>:SPECtrum
STOP:GPRF:MEAS<i>:SPECtrum
ABORt:GPRF:MEAS<i>:SPECtrum
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
V3.0.10
Options: 
R&S CMW-KM010
Manual operation: 
See 
"Spectrum (Softkey)"
Top