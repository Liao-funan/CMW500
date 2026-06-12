# Performing Single-Shot Measurements (OFDM, CMIMO)

Module: WLAN Measurements
Source: 3b0fdef29706438b.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Performing Single-Shot Measurements (OFDM, CMIMO)
Performing Single-Shot Measurements (OFDM, CMIMO)
// *****************************************************************************
// After configuring the measurement for 802.11n composite MIMO measurements:
// Start single-shot measurement and return the average results.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:WLAN:MEAS:MEValuation:MODulation:CMIMo:AVERage?
FETCh:WLAN:MEAS:MEValuation:STATe?
// *****************************************************************************
// Query spectrum traces for the first two antennas/streams.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MIMO1:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MIMO2:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:FREQuency?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK:MIMO1?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK:MIMO2?
 
// *****************************************************************************
// Query statistical results for the first two antennas/streams.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:MODulation:CMIMo:CURRent?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO1:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO2:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO1:FREQuency:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO2:FREQuency:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:OBW:MIMO1?
FETCh:WLAN:MEAS:MEValuation:TSMask:OBW:MIMO2?
Top