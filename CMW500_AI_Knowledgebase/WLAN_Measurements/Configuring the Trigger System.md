# Configuring the Trigger System

Module: WLAN Measurements
Source: aad6cce60ff04297.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Configuring the Trigger System
Configuring the Trigger System
// *****************************************************************************
// Set trigger source, timeout, trigger level, slope and minimum trigger gap. 
// ***************************************************************************** 
TRIGger:WLAN:MEAS:MEValuation:SOURce 'IF Power'
TRIGger:WLAN:MEAS:MEValuation:TOUT 1
TRIGger:WLAN:MEAS:MEValuation:THReshold -25
TRIGger:WLAN:MEAS:MEValuation:SLOPe REDGe
TRIGger:WLAN:MEAS:MEValuation:MGAP 0.00002
Top