# Performing Single-Shot Measurements

Module: Bluetooth Measurements
Source: d49b9b8664d64d0b.htm

## 原始指令文档说明
Bluetooth
®
 Measurements
 > 
Programming
 > 
Using Bluetooth List Mode
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Start single-shot measurement.
// Return modulation results for segment 1.
// *****************************************************************************
INIT:BLUetooth:MEAS:MEValuation
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:MODulation:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:MODulation:MAXimum?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:MODulation:AVERage?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:MODulation:MINimum?
// *****************************************************************************
// Return average and maximum statistical power results.
// *****************************************************************************
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:PVTime:CURRent?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:PVTime:MAXimum?
// *****************************************************************************
// Return maximum 20 dB bandwidth spectrum results.
// *****************************************************************************
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:SOBW:MAXimum?
// *****************************************************************************
// Return spectrum ACP results.
// *****************************************************************************
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent2:SACP?
// *****************************************************************************
// Alternatively for LE coded PHY return current modulation 
// results and standard deviation results
// *****************************************************************************
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:MODulation:CURRent:EXTended?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent2:MODulation:CURRent:EXTended?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent1:MODulation:SDEViation:EXTended?
FETCh:BLUetooth:MEAS:MEValuation:LIST:SEGMent2:MODulation:SDEViation:EXTended?
Top