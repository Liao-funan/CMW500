# Retrieving Single Results for All Segments

Module: LTE Measurements
Source: c46007ee29ee49ef.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Programming
 > 
Using LTE List Mode
 > 
Retrieving Single Results for All Segments
Retrieving Single Results for All Segments
// *****************************************************************************
// Return selected modulation results. 
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:EVM:RMS:LOW:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:EVM:PEAK:LOW:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:EVM:DMRS:LOW:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:MERRor:RMS:LOW:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:MERRor:PEAK:LOW:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:MERRor:DMRS:LOW:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:PERRor:RMS:LOW:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:PERRor:PEAK:HIGH:CURRent?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:PERRor:DMRS:HIGH:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:IQOFfset:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:FERRor:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:TERRor:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:TPOWer:MAXimum?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:PPOWer:MINimum?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:PSD:MINimum?
// *****************************************************************************
// Return selected inband emission and spectrum flatness results.
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:IEMission:MARGin:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:IEMission:MARGin:RBINdex:EXTReme?
FETCh:LTE:MEAS:MEValuation:LIST:ESFLatness:RIPPle1:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:ESFLatness:DIFFerence2:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:ESFLatness:MINR1:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:ESFLatness:MAXR2:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:ESFLatness:SCINdex:MINimum1:CURRent?
// *****************************************************************************
// Return selected spectrum emission and ACLR results.
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:SEMask:OBW:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:SEMask:TXPower:MAXimum?
FETCh:LTE:MEAS:MEValuation:LIST:SEMask:MARGin:AREA5:NEGativ:MINimum?
FETCh:LTE:MEAS:MEValuation:LIST:ACLR:EUTRa:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:ACLR:EUTRa:NEGativ:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:ACLR:UTRA2:POSitiv:AVERage?
// *****************************************************************************
// Query the RMS power monitor results.
// Query the offset of the first result for segment 2 within the
// returned list of power values.
// Query the number of power results related to segment 2.
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:PMONitor:RMS?
FETCh:LTE:MEAS:MEValuation:LIST:SEGMent2:PMONitor:ARRay:STARt?
FETCh:LTE:MEAS:MEValuation:LIST:SEGMent2:PMONitor:ARRay:LENGth?
// *****************************************************************************
// Return selected total TX power results (all carriers).
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:POWer:TXPower:AVERage?
FETCh:LTE:MEAS:MEValuation:LIST:POWer:TXPower:MAXimum?
// *****************************************************************************
// Return detected allocation, modulation scheme and channel type of the
// last slot within the statistical length of the modulation measurement.
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:DALLocation?
FETCh:LTE:MEAS:MEValuation:LIST:MODulation:DMODulation?
FETCh:LTE:MEAS:MEValuation:LIST:SEMask:DCHType?
// *****************************************************************************
// Return the individual segment reliability indicators
// *****************************************************************************
FETCh:LTE:MEAS:MEValuation:LIST:SRELiability?
Top