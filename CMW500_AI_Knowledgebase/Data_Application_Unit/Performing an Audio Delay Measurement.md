# Performing an Audio Delay Measurement

Module: Data Application Unit
Source: c88d00fdd7494a7c.htm

## 原始指令文档说明
Data Application Unit
 > 
Programming
 > 
Data Application Measurements
 > 
Performing an Audio Delay Measurement
Performing an Audio Delay Measurement
// *****************************************************************************
// Specify the size of the measurement record.
// Query the measurement interval duration and the number of samples per interval.
// *****************************************************************************
CONFigure:DATA:MEAS:ADELay:MSAMples 1500
CONFigure:DATA:MEAS:ADELay:SAMPles?
CONFigure:DATA:MEAS:ADELay:SPINterval?
// *****************************************************************************
// Start the measurement.
// *****************************************************************************
INIT:DATA:MEAS:ADELay
// *****************************************************************************
// Wait 30 seconds, so that a complete trace can be measured. 
// *****************************************************************************
PAUSE 30
// *****************************************************************************
// Query the results relevant for the media endpoint type "Audioboard".
// *****************************************************************************
FETCh:DATA:MEAS:ADELay:TRACe:ULINk:CURRent?
FETCh:DATA:MEAS:ADELay:TRACe:DLINk:CURRent?
FETCh:DATA:MEAS:ADELay:TRACe:TAULink:CURRent?
FETCh:DATA:MEAS:ADELay:ULINk?
FETCh:DATA:MEAS:ADELay:DLINk?
FETCh:DATA:MEAS:ADELay:TAULink?
// *****************************************************************************
// Query the results relevant for the media endpoint type "Loopback".
// *****************************************************************************
FETCh:DATA:MEAS:ADELay:TRACe:LOOPback:CURRent?
FETCh:DATA:MEAS:ADELay:TRACe:TALoopback:CURRent?
FETCh:DATA:MEAS:ADELay:LOOPback?
FETCh:DATA:MEAS:ADELay:TALoopback?
Top