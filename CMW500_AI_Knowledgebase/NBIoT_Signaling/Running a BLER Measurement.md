# Running a BLER Measurement

Module: NBIoT Signaling
Source: bb9c01ceeb074d51.htm

## 原始指令文档说明
NB-IoT Signaling
 > 
Programming
 > 
BLER Tests
 > 
Running a BLER Measurement
Running a BLER Measurement
// *****************************************************************************
// Start the BLER measurement. Wait until the measurement is running.
// *****************************************************************************
INITiate:NIOT:SIGN:BLER
WHILE FETCh:NIOT:SIGN:BLER:STATe:ALL? <> "RUN","ADJ","ACT"
// *****************************************************************************
// Query the measurement results.
// *****************************************************************************
FETCh:NIOT:SIGN:BLER:ABSolute?
FETCh:NIOT:SIGN:BLER:RELative?
Top