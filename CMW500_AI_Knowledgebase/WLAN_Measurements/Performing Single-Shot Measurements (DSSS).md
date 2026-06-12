# Performing Single-Shot Measurements (DSSS)

Module: WLAN Measurements
Source: 4112751cff134e48.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Performing Single-Shot Measurements (DSSS)
Performing Single-Shot Measurements (DSSS)
// *****************************************************************************
// After configuring the measurement for an 802.11b DSSS signal:
// Start single-shot measurement and return an EVM trace.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:WLAN:MEAS:MEValuation:TRACe:EVMagnitude:DSSS:CURRent?
FETCh:WLAN:MEAS:MEValuation:STATe?
 
// *****************************************************************************
// Read EVM, I/Q constellation, spectrum and PvT traces obtained in the
// last measurement without re-starting the measurement.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:TRACe:EVMagnitude:DSSS:CURRent?
FETCh:WLAN:MEAS:MEValuation:TRACe:IQConst:INPHase?
FETCh:WLAN:MEAS:MEValuation:TRACe:IQConst:QUADrature?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:FREQuency?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:MINimum?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:TIME?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:REDGe:MINimum?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:FEDGe:MINimum?
// *****************************************************************************
// Read statistical results obtained in the last measurement
// without re-starting the measurement.
// ***************************************************************************** 
FETCh:WLAN:MEAS:MEValuation:MODulation:DSSS:CURRent?
FETCh:WLAN:MEAS:MEValuation:TSMask:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:FREQuency:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:OBW?
FETCh:WLAN:MEAS:MEValuation:PVTime:REDGe:AVERage?
FETCh:WLAN:MEAS:MEValuation:PVTime:FEDGe:AVERage?
Top