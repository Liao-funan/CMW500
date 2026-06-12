# Single-Shot and Continuous Power Measurements

Module: GPRF Measurements
Source: 45fcdf0a5ae34af7.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
Power Measurement
 > 
Single-Shot and Continuous Power Measurements
Single-Shot and Continuous Power Measurements
// *************************************************************************
// Start single-shot measurement, return RMS-averaged power in last 
// measured timeslot. Return standard deviation of the RMS power results 
// without repeating the measurement. 
// Query the measurement state (should be "RDY").
// *************************************************************************
INIT:GPRF:MEAS:POWer
FETCh:GPRF:MEAS:POWer:CURRent?
FETCh:GPRF:MEAS:POWer:SDEViation?
FETCh:GPRF:MEAS:POWer:STATe?
// *************************************************************************
// Start continuous measurement. Wait for 5 ms and return last valid result
// for the power in last measured timeslot of the current measurement 
// cycle. Query measurement state and substates (should be "RUN,ADJ,ACT").
// *************************************************************************
CONFigure:GPRF:MEAS:POWer:REPetition CONTinuous
INIT:GPRF:MEAS:POWer
Pause 5
FETCh:GPRF:MEAS:POWer:CURRent?
FETCh:GPRF:MEAS:POWer:STATe:ALL?
FETCh:GPRF:MEAS:POWer:ESTatistics?
Top