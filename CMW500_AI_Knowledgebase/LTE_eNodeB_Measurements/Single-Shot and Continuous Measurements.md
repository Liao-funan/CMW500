# Single-Shot and Continuous Measurements

Module: LTE eNodeB Measurements
Source: 5aee607f19af4a5d.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *****************************************************************************
// Start single-shot measurement, return magnitude error bar graph values.
// Return maximum magnitude error and phase bar graph values
// (without repeating the measurement).
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:LTE:MEAS:ENB:MEValuation
FETCh:LTE:MEAS:ENB:MEValuation:MERRor:CURRent?
FETCh:LTE:MEAS:ENB:MEValuation:MERRor:MAXimum?
FETCh:LTE:MEAS:ENB:MEValuation:PERRor:MAXimum?
FETCh:LTE:MEAS:ENB:MEValuation:STATe?
// *****************************************************************************
// Start continuous measurement and wait for 5 s.
// Return average EVM bar graph results.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:LTE:MEAS:ENB:MEValuation:REPetition CONTinuous
INIT:LTE:MEAS:ENB:MEValuation
Pause 5000
FETCh:LTE:MEAS:ENB:MEValuation:EVMagnitude:AVERage?
FETCh:LTE:MEAS:ENB:MEValuation:STATe:ALL?
Top