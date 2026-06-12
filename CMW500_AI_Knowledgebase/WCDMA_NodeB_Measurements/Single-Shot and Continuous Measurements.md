# Single-Shot and Continuous Measurements

Module: WCDMA NodeB Measurements
Source: 7b2fe89a9bcb43f1.htm

## 原始指令文档说明
WCDMA NodeB Measurements
 > 
Programming
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *****************************************************************************
// Start single-shot measurement, return modulation values.
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:WCDMa:MEAS:NB:MEValuation
FETCh:WCDMa:MEAS:NB:MEValuation:MODulation:CURRent?
FETCh:WCDMa:MEAS:NB:MEValuation:MODulation:MAXimum?
FETCh:WCDMa:MEAS:NB:MEValuation:STATe?
// *****************************************************************************
// Start continuous measurement and return average spectrum results.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:WCDMa:MEAS:NB:MEValuation:REPetition CONTinuous
INIT:WCDMa:MEAS:NB:MEValuation
FETCh:WCDMa:MEAS:NB:MEValuation:SPECtrum:AVERage?
FETCh:WCDMa:MEAS:NB:MEValuation:STATe:ALL?
Top