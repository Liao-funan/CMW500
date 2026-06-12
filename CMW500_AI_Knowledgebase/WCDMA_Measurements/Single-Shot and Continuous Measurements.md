# Single-Shot and Continuous Measurements

Module: WCDMA Measurements
Source: dbb5e90cb40f400f.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *****************************************************************************
// Start single-shot measurement, return magnitude error trace. 
// Return maximum magnitude error trace and maximum phase (without repeating 
// the measurement. Query the measurement state (should be "RDY").     
// *****************************************************************************
INIT:WCDMA:MEAS:MEValuation
FETCh:WCDMa:MEAS:MEValuation:TRACe:MERRor:CURRent?
FETCh:WCDMa:MEAS:MEValuation:TRACe:MERRor:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:TRACe:PERRor:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:STATe?
 
// *****************************************************************************
// Start continuous measurement; wait for 5 ms and return average result.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:WCDMa:MEAS:MEValuation:REPetition CONTinuous
INIT:WCDMA:MEAS:MEValuation
Pause 5000
FETCh:WCDMa:MEAS:MEValuation:TRACe:EVMagnitude:AVERage? 
FETCh:WCDMa:MEAS:MEValuation:STATe:ALL?
Top