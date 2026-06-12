# Performing Single-Shot Measurements

Module: NBIoT Measurements
Source: c380e84f66a14bce.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Programming
 > 
General Examples
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Enable all measurements.
// *****************************************************************************
CONF:NIOT:MEAS:MEValuation:RESult:ALL ON,ON,ON,ON,ON,ON,ON,ON,ON,ON
// *****************************************************************************
// Start single-shot measurement, return average EVM bar graph values.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:NIOT:MEAS:MEValuation:EVMagnitude:AVERage?
FETCh:NIOT:MEAS:MEValuation:STATe?
// *****************************************************************************
// Query modulation traces, bar graph values and statistical values
// obtained in the last measurement, without re-starting the measurement.
// *****************************************************************************
FETCh:NIOT:MEAS:MEValuation:EVMagnitude:MAXimum?
FETCh:NIOT:MEAS:MEValuation:EVMagnitude:PEAK:MAXimum?
FETCh:NIOT:MEAS:MEValuation:TRACe:EVMSymbol:MAXimum?
FETCh:NIOT:MEAS:MEValuation:MERRor:AVERage?
FETCh:NIOT:MEAS:MEValuation:MERRor:MAXimum?
FETCh:NIOT:MEAS:MEValuation:PERRor:AVERage?
FETCh:NIOT:MEAS:MEValuation:PERRor:MAXimum?
FETCh:NIOT:MEAS:MEValuation:TRACe:IQ?
FETCh:NIOT:MEAS:MEValuation:MODulation:CURRent?
FETCh:NIOT:MEAS:MEValuation:MODulation:EXTReme?
// *****************************************************************************
// Query inband emission results.
// *****************************************************************************
FETCh:NIOT:MEAS:MEValuation:TRACe:IEMissions?
FETCh:NIOT:MEAS:MEValuation:IEMission:MARGin:AVERage?
FETCh:NIOT:MEAS:MEValuation:IEMission:MARGin:EXTReme:SCINdex?
// *****************************************************************************
// Query spectrum emission results.
// *****************************************************************************
FETCh:NIOT:MEAS:MEValuation:TRACe:SEMask:AVERage?
FETCh:NIOT:MEAS:MEValuation:TRACe:SEMask:MAXimum?
FETCh:NIOT:MEAS:MEValuation:SEMask:AVERage?
FETCh:NIOT:MEAS:MEValuation:SEMask:EXTReme?
FETCh:NIOT:MEAS:MEValuation:SEMask:MARGin:ALL?
FETCh:NIOT:MEAS:MEValuation:SEMask:MARGin:MINimum:POSitiv?
FETCh:NIOT:MEAS:MEValuation:SEMask:MARGin:MINimum:NEGativ?
// *****************************************************************************
// Query ACLR results.
// *****************************************************************************
FETCh:NIOT:MEAS:MEValuation:TRACe:ACLR:CURRent?
FETCh:NIOT:MEAS:MEValuation:TRACe:ACLR:AVERage?
FETCh:NIOT:MEAS:MEValuation:ACLR:CURRent?
FETCh:NIOT:MEAS:MEValuation:ACLR:AVERage?
// *****************************************************************************
// Query power monitor results.
// *****************************************************************************
FETCh:NIOT:MEAS:MEValuation:TRACe:PMONitor?
// *****************************************************************************
// Query power dynamics results.
// *****************************************************************************
FETCh:NIOT:MEAS:MEValuation:TRACe:PDYNamics:AVERage?
FETCh:NIOT:MEAS:MEValuation:TRACe:PDYNamics:MAXimum?
FETCh:NIOT:MEAS:MEValuation:TRACe:PDYNamics:POST:AVERage?
FETCh:NIOT:MEAS:MEValuation:TRACe:PDYNamics:POST:MAXimum?
FETCh:NIOT:MEAS:MEValuation:PDYNamics:AVERage?
FETCh:NIOT:MEAS:MEValuation:PDYNamics:MINimum?
FETCh:NIOT:MEAS:MEValuation:PDYNamics:MAXimum?
// *****************************************************************************
// Query limit check results.
// *****************************************************************************
CALCulate:NIOT:MEAS:MEValuation:ACLR:CURRent?
CALCulate:NIOT:MEAS:MEValuation:SEMask:CURRent?
CALCulate:NIOT:MEAS:MEValuation:MODulation:CURRent?
CALCulate:NIOT:MEAS:MEValuation:PDYNamics:AVERage?
CALCulate:NIOT:MEAS:MEValuation:PDYNamics:MINimum?
CALCulate:NIOT:MEAS:MEValuation:PDYNamics:MAXimum?
Top