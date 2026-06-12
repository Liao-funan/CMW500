# INITiateGSMMEASiMEValuation

Module: GSM Measurements
Source: 934b9e05509748d3.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:GSM:MEAS<i>:MEValuation
INITiate:GSM:MEAS<i>:MEValuation
STOP:GSM:MEAS<i>:MEValuation
ABORt:GSM:MEAS<i>:MEValuation
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
V1.0.0.4
Manual operation: 
See 
"Multi Evaluation (Softkey)"
Top