# CALibrationGPRFMEASiEPSensorZERO

Module: GPRF Measurements
Source: c0b5fec8d438406a.htm

## 原始指令文档说明
GPRF Measurements
 > 
Command Reference
 > 
External Power Sensor Measurement Commands
 > 
Zeroing
 > 
CALibration:GPRF:MEAS<i>:EPSensor:ZERO
CALibration:GPRF:MEAS<i>:EPSensor:ZERO
Initiates zeroing of the power sensor or reads the zeroing state. A running external power sensor measurement is interrupted and restarted after the zeroing procedure has been completed.
Zeroing takes a few seconds (3 to 10).
Return values: 
<Reliability>
<ZeroingState>
PASSed |
 
 FAILed
'PASSed':
 The previous zeroing was successful.
'FAILed':
 The previous zeroing resulted in an error, e.g. because the signal power was not switched off.
Example: 
See 
"Zeroing the External Sensor"
Firmware/Software: 
V1.0.0.4
Manual operation: 
See 
"Start Zeroing"
Top