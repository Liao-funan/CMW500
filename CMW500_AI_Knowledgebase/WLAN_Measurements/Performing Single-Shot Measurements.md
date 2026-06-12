# Performing Single-Shot Measurements

Module: WLAN Measurements
Source: 535e2979a20a48ff.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
Using WLAN List Mode
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Start single-shot measurement.
// Return average results for segment 1 and segment 2.
// Query the measurement state (should be "RDY").     
// *****************************************************************************
INIT:WLAN:MEAS:MEValuation
FETCh:WLAN:MEAS:MEValuation:LIST:SEGMent1:MODulation:OFDM:AVERage?
FETCh:WLAN:MEAS:MEValuation:LIST:SEGMent2:MODulation:OFDM:AVERage?
FETCh:WLAN:MEAS:MEValuation:LIST:SEGMent1:TSMask:OFDM:AVERage?
FETCh:WLAN:MEAS:MEValuation:LIST:SEGMent2:TSMask:OFDM:AVERage?
FETCh:WLAN:MEAS:MEValuation:STATe? 
 
// *****************************************************************************
// Alternatively, use segment-independent commands
// to retrieve the results for all segments.
// *****************************************************************************
FETCh:WLAN:MEAS:MEValuation:LIST:MODulation:OFDM:AVERage?
FETCh:WLAN:MEAS:MEValuation:LIST:TSMask:OFDM:AVERage?
 
// *****************************************************************************
// Disable the list mode.
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:LIST OFF
Top