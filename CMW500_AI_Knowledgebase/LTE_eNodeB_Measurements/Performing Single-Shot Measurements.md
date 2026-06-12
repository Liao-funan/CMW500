# Performing Single-Shot Measurements

Module: LTE eNodeB Measurements
Source: 20109b6d113e4afa.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Programming
 > 
Performing Single-Shot Measurements
Performing Single-Shot Measurements
// *****************************************************************************
// Enable all measurements.
// *****************************************************************************
CONF:LTE:MEAS:ENB:MEValuation:RESult:ALL ON,ON,ON,ON,ON,ON,ON,ON,ON
CONFigure:LTE:MEAS:ENB:MEValuation:RESult:OOPower ON
// *****************************************************************************
// Start single-shot measurement, return average EVM bar graph values.
// Query the measurement state (should be "RDY") and the modulation scheme
// configured via the E-UTRA test model.
// *****************************************************************************
READ:LTE:MEAS:ENB:MEValuation:EVMagnitude:AVERage?
FETCh:LTE:MEAS:ENB:MEValuation:STATe?
FETCh:LTE:MEAS:ENB:MEValuation:MODulation?
// *****************************************************************************
// Query modulation traces, bar graph values and statistical values.
// *****************************************************************************
FETCh:LTE:MEAS:ENB:MEValuation:EVMagnitude:MAXimum?
FETCh:LTE:MEAS:ENB:MEValuation:MERRor:AVERage?
FETCh:LTE:MEAS:ENB:MEValuation:MERRor:MAXimum?
FETCh:LTE:MEAS:ENB:MEValuation:PERRor:AVERage?
FETCh:LTE:MEAS:ENB:MEValuation:PERRor:MAXimum?
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:OSPower?
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:SFLatness?
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:IQ?
FETCh:LTE:MEAS:ENB:MEValuation:MODulation:AVERage:MINPut?
FETCh:LTE:MEAS:ENB:MEValuation:MODulation:EXTReme:MINPut?
FETCh:LTE:MEAS:ENB:MEValuation:MODulation:AVERage:AINPut?
FETCh:LTE:MEAS:ENB:MEValuation:MODulation:EXTReme:AINPut?
// *****************************************************************************
// Query spectrum emission results.
// *****************************************************************************
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:SEMask:RBW30:CURRent?
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:SEMask:RBW100:AVERage?
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:SEMask:RBW1000:MAXimum?
FETCh:LTE:MEAS:ENB:MEValuation:SEMask:CURRent?
FETCh:LTE:MEAS:ENB:MEValuation:SEMask:EXTReme?
FETCh:LTE:MEAS:ENB:MEValuation:SEMask:MARGin?
FETCh:LTE:MEAS:ENB:MEValuation:SEMask:MARGin:MINimum:POSitiv?
FETCh:LTE:MEAS:ENB:MEValuation:SEMask:MARGin:MINimum:NEGativ?
// *****************************************************************************
// Query ACLR results.
// *****************************************************************************
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:ACLR:CURRent?
FETCh:LTE:MEAS:ENB:MEValuation:TRACe:ACLR:AVERage?
FETCh:LTE:MEAS:ENB:MEValuation:ACLR:CURRent?
FETCh:LTE:MEAS:ENB:MEValuation:ACLR:AVERage?
// *****************************************************************************
// Query ON/OFF power results.
// *****************************************************************************
READ:LTE:MEAS:ENB:MEValuation:TRACe:OOPower:MAXimum?
READ:LTE:MEAS:ENB:MEValuation:OOPower:MAXimum?
// *****************************************************************************
// Query limit check results.
// *****************************************************************************
CALCulate:LTE:MEAS:ENB:MEValuation:ACLR:CURRent?
CALCulate:LTE:MEAS:ENB:MEValuation:SEMask:CURRent?
CALCulate:LTE:MEAS:ENB:MEValuation:MODulation:CURRent:MINPut?
Top