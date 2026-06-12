# INITiateGPRFMEASiIQVSlot

Module: GPRF Measurements
Source: 5eb2347a3ccd4185.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
I/Q vs. Slot Measurement Commands
 > 
Measurement Control and States
 > 
INITiate:GPRF:MEAS<i>:IQVSlot
INITiate:GPRF:MEAS<i>:IQVSlot
STOP:GPRF:MEAS<i>:IQVSlot
ABORt:GPRF:MEAS<i>:IQVSlot
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
V1.0.3.6
Options: 
R&S CMW-KM011
Manual operation: 
See 
"I/Q vs. Slot (Softkey)"
Top