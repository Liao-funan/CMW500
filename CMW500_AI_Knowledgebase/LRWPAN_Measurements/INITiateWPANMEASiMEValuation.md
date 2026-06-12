# INITiateWPANMEASiMEValuation

Module: LRWPAN Measurements
Source: b824dc9bd50045b2.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Command Reference
 > 
LR-WPAN Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WPAN:MEAS<i>:MEValuation
INITiate:WPAN:MEAS<i>:MEValuation
STOP:WPAN:MEAS<i>:MEValuation
ABORt:WPAN:MEAS<i>:MEValuation
Starts, stops, or aborts the measurement:
INITiate...
 starts or restarts the measurement. The measurement enters the "RUN" state.
STOP...
 halts the measurement immediately. The measurement enters the "RDY" state. Measurement results are kept. Allocated resources remain allocated to the measurement.
ABORt...
 halts the measurement immediately. The measurement enters the "OFF" state. All measurement values are set to NAV. Allocated resources are released.
Use 
FETCh...STATe?
 to query the current measurement state.
See also: 
"Measurement Control"
Example: 
See 
"Performing Continuous Measurements"
Usage: 
Event
Firmware/Software: 
V3.5.10
Top