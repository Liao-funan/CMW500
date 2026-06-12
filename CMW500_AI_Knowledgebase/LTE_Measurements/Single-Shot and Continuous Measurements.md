# Single-Shot and Continuous Measurements

Module: LTE Measurements
Source: fde86295c516457c.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *****************************************************************************
// Start single-shot measurement, return magnitude error bar graph values.
// Return maximum magnitude error and phase bar graph values
// (without repeating the measurement).
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:LTE:MEAS:MEValuation
FETCh:LTE:MEAS:MEValuation:MERRor:CURRent?
FETCh:LTE:MEAS:MEValuation:MERRor:MAXimum?
FETCh:LTE:MEAS:MEValuation:PERRor:MAXimum?
FETCh:LTE:MEAS:MEValuation:STATe?
// *****************************************************************************
// Start continuous measurement and wait for 5 s.
// Return average EVM bar graph results.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:LTE:MEAS:MEValuation:REPetition CONTinuous
INIT:LTE:MEAS:MEValuation
Pause 5000
FETCh:LTE:MEAS:MEValuation:EVMagnitude:AVERage?
FETCh:LTE:MEAS:MEValuation:STATe:ALL?
Top