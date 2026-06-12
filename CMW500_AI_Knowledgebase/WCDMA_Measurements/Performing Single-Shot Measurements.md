# Performing Single-Shot Measurements

Module: WCDMA Measurements
Source: 4c36db60adf245da.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
Using WCDMA List Mode
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Start single-shot measurement, return current CDP results 
// (average CDP in the last slot in segment 1).
// Return results of segment 2: average CDP and CDE results, 
// maximum PCDE results, current and average modulation results,
// average spectrum results, UE power results,
// the phase discontinuity results. 
// Query the measurement state (should be "RDY").     
// *****************************************************************************
INIT:WCDMa:MEAS:MEValuation
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent1:CDPower:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:CDPower:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:CDERror:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:PCDE:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:MODulation:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:MODulation:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:SPECtrum:AVERage? REL
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:UEPower:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:SEGMent2:PHD:CURRent?
FETCh:WCDMa:MEAS:MEValuation:STATe? 
 
// *****************************************************************************
// Alternatively use segment-independent commands
// to retrieve the results for all segments.
// *****************************************************************************
FETCh:WCDMa:MEAS:MEValuation:LIST:CDPower:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:CDPower:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:CDERror:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:PCDE:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:AVERage? ABS
FETCh:WCDMa:MEAS:MEValuation:LIST:UEPower:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:PHD:CURRent?
Top