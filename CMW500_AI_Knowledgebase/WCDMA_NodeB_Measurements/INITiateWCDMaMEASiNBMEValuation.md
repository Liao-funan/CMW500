# INITiateWCDMaMEASiNBMEValuation

Module: WCDMA NodeB Measurements
Source: a536121143fd4857.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WCDMa:MEAS<i>:NB:MEValuation
INITiate:WCDMa:MEAS<i>:NB:MEValuation
STOP:WCDMa:MEAS<i>:NB:MEValuation
ABORt:WCDMa:MEAS<i>:NB:MEValuation
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
V3.5.10
Manual operation: 
See 
"Multi Evaluation (Softkey)"
Top