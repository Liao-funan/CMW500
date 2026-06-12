# Running a PER Measurement

Module: WLAN Signaling
Source: 198b4ee3d40f4924.htm

## 原始指令文档说明
WLAN Signaling
 > 
Programming
 > 
PER Measurements
 > 
Running a PER Measurement
Running a PER Measurement
// *****************************************************************************
// Start a PER measurement.
// Wait until the measurement is finished.
// *****************************************************************************
INIT:WLAN:SIGN:PER
WHILE FETCh:WLAN:SIGN:PER:STATe? <> "RDY"
// *****************************************************************************
// Query the measurement results.
// *****************************************************************************
FETCh:WLAN:SIGN:PER?
// *****************************************************************************
// Query information about last ACK frame.
// *****************************************************************************
FETCh:WLAN:SIGN:PACKrate?
Top