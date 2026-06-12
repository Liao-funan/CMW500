# Zeroing the External Sensor

Module: GPRF Measurements
Source: 7c924e9777264f86.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
External Power Sensor Measurement
 > 
Zeroing the External Sensor
Zeroing the External Sensor
// *************************************************************************
// ***** The measured RF signal must be switched off for this step. *****
// Initiate zeroing of the power sensor
// *************************************************************************
CALibration:GPRF:MEAS:EPSensor:ZERO
// *************************************************************************
// This may take 3 to 10 seconds ...
// Read sensor state.
// *************************************************************************
CALibration:GPRF:MEAS:EPSensor:ZERO?
// *************************************************************************
// After completion, switch on RF signal again to continue the measurement.
// *************************************************************************
Top