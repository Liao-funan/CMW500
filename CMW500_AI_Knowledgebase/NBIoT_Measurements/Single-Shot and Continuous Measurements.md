# Single-Shot and Continuous Measurements

Module: NBIoT Measurements
Source: d127cc6efb38422a.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT NPRACH Measurement
 > 
Programming
 > 
Single-Shot and Continuous Measurements
Single-Shot and Continuous Measurements
// *****************************************************************************
// Start single-shot measurement, return magnitude error trace,
// return phase error trace (without repeating the measurement).
// Query the measurement state (should be "RDY").
// *****************************************************************************
INIT:NIOT:MEAS:PRACh
FETCh:NIOT:MEAS:PRACh:TRACe:MERRor:AVERage?
FETCh:NIOT:MEAS:PRACh:TRACe:PERRor:AVERage?
FETCh:NIOT:MEAS:PRACh:STATe?
// *****************************************************************************
// Start continuous measurement and wait for 5 ms.
// Return average EVM trace.
// Query measurement state and substates (should be "RUN,ADJ,ACT").
// *****************************************************************************
CONFigure:NIOT:MEAS:PRACh:REPetition CONTinuous
INIT:NIOT:MEAS:PRACh
Pause 5000
FETCh:NIOT:MEAS:PRACh:TRACe:EVM:AVERage?
FETCh:NIOT:MEAS:PRACh:STATe:ALL?
Top