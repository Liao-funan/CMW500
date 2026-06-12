# Configuring the Trigger System

Module: WCDMA Measurements
Source: feb2b21bfccb485e.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA PRACH Measurement
 > 
Programming
 > 
Configuring the Trigger System
Configuring the Trigger System
// *****************************************************************************
// Set trigger source, timeout, trigger level, slope, delay
// and minimum trigger gap.
// ***************************************************************************** 
TRIGger:WCDMa:MEAS:PRACh:SOURce 'IF Power (Sync)'
TRIGger:WCDMa:MEAS:PRACh:TOUT 15
TRIGger:WCDMa:MEAS:PRACh:THReshold -30
TRIGger:WCDMa:MEAS:PRACh:SLOPe REDGe
TRIGger:WCDMa:MEAS:PRACh:DELay 0
TRIGger:WCDMa:MEAS:PRACh:MGAP 0.00002
Top