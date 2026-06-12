# Configuring the Trigger System

Module: WCDMA NodeB Measurements
Source: 78ee001a045f4f34.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Programming
 > 
Configuring the Trigger System
Configuring the Trigger System
// *****************************************************************************
// Set trigger source, timeout, trigger level, slope, delay, and minimum
// trigger gap.
// ***************************************************************************** 
TRIGger:WCDMa:MEAS:NB:MEValuation:SOURce 'IF Power'
TRIGger:WCDMa:MEAS:NB:MEValuation:TOUT 1
TRIGger:WCDMa:MEAS:NB:MEValuation:THReshold -30
TRIGger:WCDMa:MEAS:NB:MEValuation:SLOPe FEDGe
TRIGger:WCDMa:MEAS:NB:MEValuation:DELay 0.0001
TRIGger:WCDMa:MEAS:NB:MEValuation:MGAP 3E-005
Top