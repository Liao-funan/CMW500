# Single-Shot and Continuous Measurements

Module: WLAN Measurements
Source: 5b3aca3ddf3e42a0.htm

## 原始指令文档说明
WLAN Measurements
 > 
Programming
 > 
General Examples
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *****************************************************************************
// Start single-shot measurement and return current statistical
// modulation results (without repeating the measurement).
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:WLAN:MEAS:MEValuation
FETCh:WLAN:MEAS:MEValuation:MODulation:DSSS:CURRent?
FETCh:WLAN:MEAS:MEValuation:STATe?
// *****************************************************************************
// Start continuous measurement; wait for 5 ms and return average
// EVM RMS trace results of the last measured cycle.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:WLAN:MEAS:MEValuation:REPetition CONTinuous
INIT:WLAN:MEAS:MEValuation
Pause 5000
FETCh:WLAN:MEAS:MEValuation:TRACe:EVMagnitude:DSSS:RMS:AVERage?
FETCh:WLAN:MEAS:MEValuation:STATe:ALL?
Top