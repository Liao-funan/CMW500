# Performing Single-Shot Measurements

Module: LTE Measurements
Source: a7175a1680ef4eb8.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE PRACH Measurement
 > 
Programming
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Enable all measurements.
// *****************************************************************************
CONFigure:LTE:MEAS:PRACh:RESult:ALL ON,ON,ON,ON,ON,ON,ON,ON
 
// *****************************************************************************
// Start single-shot measurement, return average EVM trace.
// Query the measurement state (should be "RDY").
// *****************************************************************************
READ:LTE:MEAS:PRACh:TRACe:EVM:AVERage?
FETCh:LTE:MEAS:PRACh:STATe?
// *****************************************************************************
// Retrieve detected PRACH frequency offset, sequence index and
// sequence correlation for single-preamble measurements and for
// preamble number four of multi-preamble measurements.
// *****************************************************************************
FETCh:LTE:MEAS:PRACh:MODulation:DPFoffset?
FETCh:LTE:MEAS:PRACh:MODulation:DSINdex?
FETCh:LTE:MEAS:PRACh:MODulation:SCORrelation?
FETCh:LTE:MEAS:PRACh:MODulation:DPFoffset:PREamble4?
FETCh:LTE:MEAS:PRACh:MODulation:DSINdex:PREamble4?
FETCh:LTE:MEAS:PRACh:MODulation:SCORrelation:PREamble4?
// *****************************************************************************
// Read other traces obtained in the last
// measurement without re-starting the measurement.
// *****************************************************************************
FETCh:LTE:MEAS:PRACh:TRACe:MERRor:AVERage?
FETCh:LTE:MEAS:PRACh:TRACe:MERRor:MAXimum?
FETCh:LTE:MEAS:PRACh:TRACe:PERRor:AVERage?
FETCh:LTE:MEAS:PRACh:TRACe:PERRor:MAXimum?
FETCh:LTE:MEAS:PRACh:TRACe:EVPReamble?
FETCh:LTE:MEAS:PRACh:TRACe:PVPReamble?
FETCh:LTE:MEAS:PRACh:TRACe:IQ?
FETCh:LTE:MEAS:PRACh:TRACe:PDYNamics:AVERage?
FETCh:LTE:MEAS:PRACh:TRACe:PDYNamics:MAXimum?
// *****************************************************************************
// Read single value results obtained in the last measurement
// without re-starting the measurement.
// *****************************************************************************
FETCh:LTE:MEAS:PRACh:MODulation:AVERage?
FETCh:LTE:MEAS:PRACh:MODulation:EXTReme?
FETCh:LTE:MEAS:PRACh:MODulation:PREamble4?
FETCh:LTE:MEAS:PRACh:PDYNamics:AVERage?
FETCh:LTE:MEAS:PRACh:PDYNamics:MINimum?
FETCh:LTE:MEAS:PRACh:PDYNamics:MAXimum?
 
// *****************************************************************************
// Read limit check results obtained in the last measurement
// without re-starting the measurement.
// *****************************************************************************
CALCulate:LTE:MEAS:PRACh:MODulation:AVERage?
CALCulate:LTE:MEAS:PRACh:MODulation:EXTReme?
CALCulate:LTE:MEAS:PRACh:PDYNamics:AVERage?
CALCulate:LTE:MEAS:PRACh:PDYNamics:MINimum?
CALCulate:LTE:MEAS:PRACh:PDYNamics:MAXimum?
Top