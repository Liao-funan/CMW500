# Selecting Specific Burst Types

Module: GSM Measurements
Source: ccc34f9d890143fe.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
 > 
Selecting Specific Burst Types
Selecting Specific Burst Types
// *************************************************************************
// Set the measurements frequency range and assembly 
// level for high dynamic range. Enable access burst measurements.
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:FCRange NORM
CONFigure:GSM:MEAS:MEValuation:HDALevel -45
CONFigure:GSM:MEAS:MEValuation:ABSearch ON
// *************************************************************************
// Enable the search for 16-QAM-modulated normal bursts.
// Select only GMSK-modulated normal bursts with a definite
// training sequence (TSC 1) and VAMOS TSC set 1. Start a single-shot
// modulation measurement and return the statistical results
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:NBQSearch ON
CONFigure:GSM:MEAS:MEValuation:TSEQuence TSC1
CONFigure:GSM:MEAS:MEV:MVIew GMSK, GMSK, GMSK, GMSK, GMSK, GMSK, GMSK, GMSK
CONFigure:GSM:MEAS:MEValuation:VAMos:TSCSet 1
READ:GSM:MEAS:MEValuation:MODulation:CURRent?
CALCulate:GSM:MEAS:MEValuation:MODulation:CURRent?
// *************************************************************************
// Perform a multi-slot measurement, use a frame trigger, knowing
// that slots no. 5, 6 and 7 of the analyzed signal are inactive
// *************************************************************************
TRIGger:GSM:MEAS:MEValuation:SOURce "Acquisition"
CONFigure:GSM:MEAS:MEValuation:AMODe GAP
CONFigure:GSM:MEAS:MEValuation:GLENgth 3
// *************************************************************************
// Perform a multi-slot measurement, use a frame trigger, knowing
// that slots no. 2, 3 and 4 of the analyzed signal are 8PSK-modulated,
// and that the remaining slots are inactive
// *************************************************************************
TRIGger:GSM:MEAS:MEValuation:SOURce "Acquisition"
CONFigure:GSM:MEAS:MEValuation:AMODe PATTern
CONFigure:GSM:MEAS:MEV:APATtern OFF, OFF, EPSK, EPSK, EPSK, OFF, OFF, OFF
Top