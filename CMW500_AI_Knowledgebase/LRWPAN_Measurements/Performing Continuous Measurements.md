# Performing Continuous Measurements

Module: LRWPAN Measurements
Source: fa5491a6f7ba402a.htm

## 原始指令文档说明
LR-WPAN TX Measurement
 > 
Programming
 > 
Performing Continuous Measurements
Performing Continuous Measurements
// *************************************************************************
// Start continuous measurement; wait for 5 ms and return average 
// transmit power result in last measurement cycle.
// Query measurement state and substates (should be "RUN,ADJ,ACT"). 
// *************************************************************************
CONFigure:WPAN:MEAS:MEValuation:REPetition CONTinuous
INIT:WPAN:MEAS:MEValuation
Pause 5000
FETCh:WPAN:MEAS:MEValuation:PVTime:AVERage? 
FETCh:WPAN:MEAS:MEValuation:STATe:ALL?
Top