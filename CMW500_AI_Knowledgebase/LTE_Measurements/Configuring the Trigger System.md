# Configuring the Trigger System

Module: LTE Measurements
Source: 66c6b4a699874d2c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Configuring the Trigger System
Configuring the Trigger System
// *****************************************************************************
// Set trigger source, timeout, trigger level, slope, delay,
// minimum trigger gap, synchronization mode and acquisition mode.
// ***************************************************************************** 
TRIGger:LTE:MEAS:MEValuation:SOURce 'IF Power'
TRIGger:LTE:MEAS:MEValuation:TOUT 1
TRIGger:LTE:MEAS:MEValuation:THReshold -30
TRIGger:LTE:MEAS:MEValuation:SLOPe FEDGe
TRIGger:LTE:MEAS:MEValuation:DELay 0.0001
TRIGger:LTE:MEAS:MEValuation:MGAP 3
TRIGger:LTE:MEAS:MEValuation:SMODe ENHanced
TRIGger:LTE:MEAS:MEValuation:AMODe SLOT
Top