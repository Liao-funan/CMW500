# Performing Single Shot Measurements

Module: LRWPAN Measurements
Source: d69600890b8747e6.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Programming
 > 
Performing Single Shot Measurements
Performing Single Shot Measurements
// *************************************************************************
// Define stop condition (stop on limit failure) and error handling,
// select a statistic count of 30 packets. Enable phase tracking.
// Query whether all measurements are enabled (response: ON, ON ...)
// *************************************************************************
CONFigure:WPAN:MEAS:MEValuation:SCONdition SLFail
CONFigure:WPAN:MEAS:MEValuation:MOEXception ON
CONFigure:WPAN:MEAS:MEValuation:SCOunt:PVTime 30
CONFigure:WPAN:MEAS:MEValuation:SCOunt:MODulation 30
CONFigure:WPAN:MEAS:MEValuation:SCOunt:SPECtrum 30
CONFigure:WPAN:MEAS:MEValuation:MODulation:PTRacking ON
CONFigure:WPAN:MEAS:MEValuation:RESult:PVTime?
CONFigure:WPAN:MEAS:MEValuation:RESult?
// *************************************************************************
// Start single-shot measurement and query modulation results.
// Query the standard deviations and the meas. state (should be "RDY").
// *************************************************************************
READ:WPAN:MEAS:MEValuation:MODulation:OFFSet:CURRent?
FETCh:WPAN:MEAS:MEValuation:MODulation:ABSolute:CURRent?
FETCh:WPAN:MEAS:MEValuation:MODulation:ABSolute:SDEViation?
FETCh:WPAN:MEAS:MEValuation:MODulation:OFFSet:SDEViation?
FETCh:WPAN:MEAS:MEValuation:STATe?
WAITKEY >Single-slot meas. completed, press "OK" to proceed to next measurement< 
// *****************************************************************************
// Query modulation and transmit power traces obtained in the last 
// measurement, without re-starting the measurement.
// *****************************************************************************
FETCh:WPAN:MEAS:MEValuation:TRACe:EVMChip:OFFSet:CURRent?
FETCh:WPAN:MEAS:MEValuation:TRACe:EVMChip:ABSolute:CURRent?
FETCh:WPAN:MEAS:MEValuation:TRACe:PVTime:CURRent?
FETCh:WPAN:MEAS:MEValuation:TRACe:IQABsolute?
FETCh:WPAN:MEAS:MEValuation:TRACe:IQOFfset?
Top