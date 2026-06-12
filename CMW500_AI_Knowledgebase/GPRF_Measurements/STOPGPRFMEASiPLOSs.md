# STOPGPRFMEASiPLOSs

Module: GPRF Measurements
Source: a58bdd8af6e14071.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
Pathloss Measurement Commands
 > 
Measurement Control and States
 > 
STOP:GPRF:MEAS<i>:PLOSs
STOP:GPRF:MEAS<i>:PLOSs
ABORt:GPRF:MEAS<i>:PLOSs
Halts the measurement immediately. Results that have been available before this measurement are kept.
Stops or aborts the measurement:
STOP...
: The measurement enters the "RDY" state. The resources remain allocated to the measurement.
ABORt...
: The measurement enters the "OFF" state. Allocated resources are released.
Usage: 
Event
Firmware/Software: 
V3.7.21
Manual operation: 
See 
"Pathloss (softkey)"
Top