# Specifying Measurement-Specific Settings

Module: GSM Measurements
Source: 91f5f664283349d1.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
 > 
Specifying Measurement-Specific Settings
Specifying Measurement-Specific Settings
// *************************************************************************
// Select a 1.5 s timeout for the measurement. Define statistic 
// cycles and error handling (no stop when tolerances are exceeded, 
// measure on exception). Ignore initial off frames in idle mode.
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:TOUT 1.5
CONFigure:GSM:MEAS:MEValuation:SCOunt:PVTime 100
CONFigure:GSM:MEAS:MEValuation:SCOunt:MODulation 10
CONFigure:GSM:MEAS:MEValuation:SCOunt:SMODulation 10
CONFigure:GSM:MEAS:MEValuation:SCOunt:SSWitching 10
CONFigure:GSM:MEAS:MEValuation:SCONdition SLFail
CONFigure:GSM:MEAS:MEValuation:MOEXception ON
CONFigure:GSM:MEAS:MEValuation:IIOFrames ON
// *************************************************************************
// Specify the expected PCL values in all timeslots (for power measurements)
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:PCLMode PCL
CONFigure:GSM:MEAS:MEValuation:PCL 5, 5, 5, 5, 5, 5, 5, 5
// *************************************************************************
// Query all available trigger sources (for development)
// Use a power trigger to start the measurement
// Configure the instrument for a single-slot measurement in the active
// timeslot detected by the trigger system, set a minimum duration
// of two slots between two consecutive trigger events
// *************************************************************************
TRIGger:GSM:MEAS:MEValuation:CATalog:SOURce?
TRIGger:GSM:MEAS:MEValuation:SOURce "POWer"
TRIGger:GSM:MEAS:MEValuation:SLOPe REDGe
TRIGger:GSM:MEAS:MEValuation:THReshold -2.5E+1
TRIGger:GSM:MEAS:MEValuation:TOUT 1.0E+3
CONFigure:GSM:MEAS:MEValuation:MSLots 0, 1, 0
TRIGger:GSM:MEAS:MEValuation:MGAP 2
Top