# INITiateLTEMEASiENBMEValuation

Module: LTE eNodeB Measurements
Source: 5c7df8bdb2404bee.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:LTE:MEAS<i>:ENB:MEValuation
INITiate:LTE:MEAS<i>:ENB:MEValuation
STOP:LTE:MEAS<i>:ENB:MEValuation
ABORt:LTE:MEAS<i>:ENB:MEValuation
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
V3.0.20
Top