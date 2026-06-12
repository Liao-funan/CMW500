# INITiateWCDMaMEASiMEValuation

Module: WCDMA Measurements
Source: 6e4101dbc0c248ba.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:WCDMa:MEAS<i>:MEValuation
INITiate:WCDMa:MEAS<i>:MEValuation
STOP:WCDMa:MEAS<i>:MEValuation
ABORt:WCDMa:MEAS<i>:MEValuation
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
"Performing Single-Shot Measurements"
Usage: 
Event
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Multi Evaluation (Softkey)"
Top