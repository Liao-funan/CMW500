# Performing Single-Shot Measurements

Module: WCDMA NodeB Measurements
Source: 0b96fd1248c4488c.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Programming
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Enable all measurements.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:ACLR ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:CDERror ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:CDpower ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:CHIP:EVM ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:CHIP:MERRor ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:CHIP:PERRor ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:EMASk ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:EVMagnitude ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:FERRor ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:MERRor ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:PERRor ON
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult:Power ON
// *****************************************************************************
// Alternatively use single command to enable all measurements.
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:RESult ON, ON, ON, ON, ON, 
    ON, ON, ON, ON, ON, ON, ON
// *****************************************************************************
// Start single-shot measurement, return average modulation values.
// Query the measurement state (should be "RDY") and the modulation results.
// *****************************************************************************
READ:WCDMa:MEAS:NB:MEValuation:MODulation:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:STATe?
FETCh:WCDMa:MEAS:NB:MEValuation:MODulation:MAXimum?
FETCh:WCDMa:MEAS:NB:MEValuation:MODulation:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:MODulation:SDEViation?
// *****************************************************************************
// Return all average modulation trace results obtained in the last
// measurement without re-starting the measurement.
// *****************************************************************************
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:EVMagnitude:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:EVMagnitude:PEAK:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:EVMagnitude:CHIP:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:MERRor:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:MERRor:PEAK:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:MERRor:CHIP:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:PERRor:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:PERRor:PEAK:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:PERRor:CHIP:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:FERRor:AVERage?
// *****************************************************************************
// Read average power results obtained in the last
// measurement without re-starting the measurement.
// *****************************************************************************
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:POWer:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:POWer:AVERage?
// *****************************************************************************
// Read spectrum emission results (maximum) obtained in the last
// measurement without re-starting the measurement.
// *****************************************************************************
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:EMASk:MFLeft:MAXimum?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:EMASk:MFRight:MAXimum?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:EMASk:KFILter:MAXimum?
FETCh:WCDMa:MEAS:NB:MEValuation:SPECtrum:MAXimum?
// *****************************************************************************
// Return current code domain results obtained in the last
// measurement without re-starting the measurement.
// *****************************************************************************
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:CDERror:CURRent?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:CDEMonitor:CURRent?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:CDPMonitor:CDE:CURRent?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:CDPMonitor:CDP:CURRent?
FETCh:WCDMa:MEAS:NB:MEValuation:TRACe:CDPower:CURRent?
// *****************************************************************************
// Read limit check results obtained in the last measurement
// without re-starting the measurement
// *****************************************************************************
CALCulate:WCDMa:MEAS:NB:MEValuation:SPECtrum:CURRent?
CALCulate:WCDMa:MEAS:NB:MEValuation:MODulation:CURRent?
Top