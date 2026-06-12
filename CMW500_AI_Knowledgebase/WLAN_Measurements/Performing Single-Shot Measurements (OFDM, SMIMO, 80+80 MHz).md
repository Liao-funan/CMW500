# Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)

Module: WLAN Measurements
Source: b20b5583694f4618.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)
Performing Single-Shot Measurements (OFDM, SMIMO, 80+80 MHz)
// *****************************************************************************
// After configuring the measurement for 802.11ac, switched MIMO2x2, 80+80 MHz:
// Start single-shot measurement and return first results.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:WLAN:MEAS:MEValuation:TRACe:TSMask:FREQuency?
FETCh:WLAN:MEAS:MEValuation:STATe?
// *****************************************************************************
// Query spectrum traces for both antennas/streams and segments.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MIMO1:SEGMent1:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MIMO1:SEGMent2:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MIMO2:SEGMent1:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MIMO2:SEGMent2:AVERage?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:FREQuency?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK:MIMO1:SEGMent1?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK:MIMO1:SEGMent2?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK:MIMO2:SEGMent1?
FETCh:WLAN:MEAS:MEValuation:TRACe:TSMask:MASK:MIMO2:SEGMent2?
// *****************************************************************************
// Query statistical results for both antennas/streams and segments.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:MODulation:MIMO1:SEGMents:AVERage?
FETCh:WLAN:MEAS:MEValuation:MODulation:MIMO2:SEGMents:AVERage?
FETCh:WLAN:MEAS:MEValuation:MODulation:MIMO1:AVERage?
FETCh:WLAN:MEAS:MEValuation:MODulation:MIMO2:AVERage?
FETCh:WLAN:MEAS:MEValuation:MODulation:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO1:SEGMents:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO2:SEGMents:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO1:SEGMents:FREQuency:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:MIMO2:SEGMents:FREQuency:AVERage?
FETCh:WLAN:MEAS:MEValuation:TSMask:OBW:MIMO1:SEGMents?
FETCh:WLAN:MEAS:MEValuation:TSMask:OBW:MIMO2:SEGMents?
Top