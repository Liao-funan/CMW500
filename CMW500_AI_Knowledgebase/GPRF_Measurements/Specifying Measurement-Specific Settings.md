# Specifying Measurement-Specific Settings

Module: GPRF Measurements
Source: 29d89f6794fe445c.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
Power Measurement
 > 
Specifying Measurement-Specific Settings
Specifying Measurement-Specific Settings
// *************************************************************************
// Set a measurement-specific timeout value of 1 s.
// Define step length (GSM timeslot) and measurement length.
// *************************************************************************
CONFigure:GPRF:MEAS:POWer:TOUT 1
CONFigure:GPRF:MEAS:POWer:SLENgth 577.9230769E-6
CONFigure:GPRF:MEAS:POWer:MLENgth 400E-6
// *************************************************************************
// Define measurement statistics (5 GSM timeslots).
// *************************************************************************
CONFigure:GPRF:MEAS:POWer:SCOunt 5
// *************************************************************************
// Select a 30 kHz Gaussian measurement filter.
// *************************************************************************
CONFigure:GPRF:MEAS:POWer:FILTer:TYPE GAUSs
CONFigure:GPRF:MEAS:POWer:FILTer:GAUSs:BWIDth 30E+3
// *************************************************************************
// Configure power measurement trigger settings.
// *************************************************************************
TRIGger:GPRF:MEAS:POWer:SOURce 'IF Power'
TRIGger:GPRF:MEAS:POWer:SLOPe REDGe
TRIGger:GPRF:MEAS:POWer:THReshold -25
TRIGger:GPRF:MEAS:POWer:OFFSet 50E-6
TRIGger:GPRF:MEAS:POWer:TOUT 2
TRIGger:GPRF:MEAS:POWer:MGAP 0.0001
TRIGger:GPRF:MEAS:POWer:MODE ONCE
Top