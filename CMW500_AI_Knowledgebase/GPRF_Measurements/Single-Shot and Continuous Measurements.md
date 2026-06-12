# Single-Shot and Continuous Measurements

Module: GPRF Measurements
Source: 7571cc91e0b14eec.htm

## 原始指令文档说明
GPRF Measurements
 > 
Programming
 > 
I/Q vs. Slot Measurement
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *************************************************************************
// Start single-shot measurement and query measurement state.
// Return the average I and Q amplitudes and the frequency error
// for each step (without repeating the measurement).
// *************************************************************************
INIT:GPRF:MEAS:IQVSlot
FETCh:GPRF:MEAS:IQVSlot:STATe?
FETCh:GPRF:MEAS:IQVSlot:I?
FETCh:GPRF:MEAS:IQVSlot:Q?
FETCh:GPRF:MEAS:IQVSlot:FERRor?
// *************************************************************************
// Start continuous measurement, return last valid result for
// the average level per step and the overall frequency error.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *************************************************************************
ABORt:GPRF:MEAS:IQVSlot
FETCh:GPRF:MEAS:IQVSlot:STATe?
CONFigure:GPRF:MEAS:IQVSlot:REPetition CONTinuous
INIT:GPRF:MEAS:IQVSlot
FETCh:GPRF:MEAS:IQVSlot:STATe?
FETCh:GPRF:MEAS:IQVSlot:LEVel? 
FETCh:GPRF:MEAS:IQVSlot:OFERror?
FETCh:GPRF:MEAS:IQVSlot:STATe?
FETCh:GPRF:MEAS:IQVSlot:STATe:ALL?
Top