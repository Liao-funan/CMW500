# Performing Single Shot Measurements

Module: Bluetooth Measurements
Source: 71e147c8e6bc464e.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Performing Single Shot Measurements
Performing Single Shot Measurements
// *************************************************************************
// Define stop condition (stop on limit failure) and error handling,
// select a statistic count of 30 packets.
// Query whether all measurements are enabled (response: ON, ON ...)
// *************************************************************************
CONFigure:BLUetooth:MEAS:MEValuation:SCONdition SLFail
CONFigure:BLUetooth:MEAS:MEValuation:MOEXception ON
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:PVTime 30
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:MODulation 30
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:SOBW 30
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:SACP 30
CONFigure:BLUetooth:MEAS:MEValuation:SCOunt:SGAcp 30
CONFigure:BLUetooth:MEAS:MEValuation:RESult:SGAcp?
CONFigure:BLUetooth:MEAS:MEValuation:RESult?
// *************************************************************************
// Start single-shot measurement and query EDR modulation results.
// Query the standard deviations and the meas. state (should be "RDY").
// *************************************************************************
READ:BLUetooth:MEAS:MEValuation:MODulation:EDRate:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:EDRate:SDEViation?
FETCh:BLUetooth:MEAS:MEValuation:STATe?
WAITKEY >Single-slot meas. completed, press "OK" to proceed to next measurement< 
// *************************************************************************
// Start another single-shot measurement, query EDR modulation results.
// Query the standard deviations without repeating the measurement.      
// *************************************************************************
INIT:BLUetooth:MEAS:MEValuation
FETCh:BLUetooth:MEAS:MEValuation:MODulation:EDRate:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:MODulation:EDRate:SDEViation?
FETCh:BLUetooth:MEAS:MEValuation:STATe?
Top