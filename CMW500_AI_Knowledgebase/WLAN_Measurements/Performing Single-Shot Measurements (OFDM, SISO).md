# Performing Single-Shot Measurements (OFDM, SISO)

Module: WLAN Measurements
Source: 13e6257f47e34d3d.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Performing Single-Shot Measurements (OFDM, SISO)
Performing Single-Shot Measurements (OFDM, SISO)
// *****************************************************************************
// After configuring the measurement for an 802.11a OFDM signal:
// Start the measurement and return an EVM trace.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:WLAN:MEAS:MEValuation:TRACe:EVMagnitude:SYMBol:CURRent?
FETCh:WLAN:MEAS:MEValuation:STATe?
// *****************************************************************************
// Configure external trigger, query current timing error.
// *****************************************************************************
TRIGger:WLAN:MEAS:MEValuation:SOURce "Base1: External TRIG A"
READ:WLAN:MEAS:MEValuation:PVTime:TERRor:CURRent?
 
// *****************************************************************************
// Query traces for EVM, I/Q constellation, spectrum, PvT (power and time
// results). The results are from the previous measurement.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:TRACe:EVMagnitude:SYMBol:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:EVMagnitude:CARRier:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:IQConst:INPHase?
FETCh:WLAN:MEAS:MEValuation:TRACe:IQConst:QUADrature?
FETCh:WLAN:MEAS:MEValuation:TRACe:SFLatness:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:FREQuency?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:TIME?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:REDGe:MINimum?
FETCh:WLAN:MEAS:MEValuation:TRACe:PVTime:FEDGe:MINimum?
 
// *****************************************************************************
// Query statistical results from the previous measurement.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:MODulation:CURRent?
FETCh:WLAN:MEAS:MEValuation:SFLatness:AVERage?
FETCh:WLAN:MEAS:MEValuation:SFLatness:MINimum?
FETCh:WLAN:MEAS:MEValuation:SFLatness:X:MINimum?
FETCh:WLAN:MEAS:MEValuation:TSMask:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:FREQuency:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:OBW?
// *****************************************************************************
// Alternatively configure a measurement for an 802.11ax signal. Afterwards
// start the unused tone error measurement and return an EVM 
// trace for unoccupied HE TB PPDUs and margins.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:WLAN:MEAS:MEValuation:UTERror1:CURRent?
FETCh:WLAN:MEAS:MEValuation:UTERror1:MARGin:CURRent?
FETCh:WLAN:MEAS:MEValuation:STATe?
Top