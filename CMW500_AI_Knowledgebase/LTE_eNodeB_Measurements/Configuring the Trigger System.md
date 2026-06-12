# Configuring the Trigger System

Module: LTE eNodeB Measurements
Source: a021d0c31bde46d4.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Configuring the Trigger System
Configuring the Trigger System
// *****************************************************************************
// Set trigger source, timeout, trigger level, slope, delay,
// minimum trigger gap and synchronization mode.
// ***************************************************************************** 
TRIGger:LTE:MEAS:ENB:MEValuation:SOURce 'IF Power'
TRIGger:LTE:MEAS:ENB:MEValuation:TOUT 1
TRIGger:LTE:MEAS:ENB:MEValuation:THReshold -30
TRIGger:LTE:MEAS:ENB:MEValuation:SLOPe FEDGe
TRIGger:LTE:MEAS:ENB:MEValuation:DELay 0.0001
TRIGger:LTE:MEAS:ENB:MEValuation:MGAP 3
TRIGger:LTE:MEAS:ENB:MEValuation:SMODe ENHanced
Top