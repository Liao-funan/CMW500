# INITiateNIOTMEASiMEValuation

Module: NBIoT Measurements
Source: c89a390cedba462d.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:NIOT:MEAS<i>:MEValuation
INITiate:NIOT:MEAS<i>:MEValuation
STOP:NIOT:MEAS<i>:MEValuation
ABORt:NIOT:MEAS<i>:MEValuation
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