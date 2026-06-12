# Single-Shot and Continuous Measurements

Module: GSM Measurements
Source: 41f16a56b4824af5.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
General Examples
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *************************************************************************
// Start single-shot measurement, return magnitude error trace.
// Return maximum magnitude error trace and maximum phase
// (without repeating the measurement. Query the measurement state
// should be "RDY").
// *************************************************************************
INIT:GSM:MEAS:MEValuation
FETCh:GSM:MEAS:MEValuation:TRACe:MERRor:MAXimum?
FETCh:GSM:MEAS:MEValuation:TRACe:PERRor:MAXimum?
FETCh:GSM:MEAS:MEValuation:STATe?
// *************************************************************************
// Start continuous measurement; wait for 5 ms and return measurement
// results of the last measured cycle.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *************************************************************************
CONFigure:GSM:MEAS:MEValuation:REPetition CONTinuous
INIT:GSM:MEAS:MEValuation
Pause 5000
FETCh:GSM:MEAS:MEValuation:MODulation:CURRent?
CALCulate:GSM:MEAS:MEValuation:MODulation:CURRent?
FETCh:GSM:MEAS:MEValuation:STATe:ALL?
Top