# Retrieving Single Results for All Segments

Module: GSM Measurements
Source: 0b4a34d8cfaf434b.htm

## 原始指令文档说明
GSM Measurements
 > 
Programming
 > 
GSM List Mode
 > 
Retrieving Single Results for All Segments
Retrieving Single Results for All Segments
// *************************************************************************
// Return selected power vs time results
// *************************************************************************
FETCh:GSM:MEAS:MEValuation:LIST:PVTime:ABPower:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:PVTime:SVECtor:UMAXimum:MAXimum?
FETCh:GSM:MEAS:MEValuation:LIST:PVTime:SVECtor:UMINimum:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:PVTime:SVECtor:SUBVector10:MINimum?
// *************************************************************************
// Return selected modulation results
// *************************************************************************
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:EVM:RMS:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:EVM:PEAK:CURRent?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:EVM:PERCentile?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:MERRor:RMS:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:MERRor:PERCentile?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:PERRor:RMS:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:PERRor:PEAK:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:PERRor:PERCentile?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:IQOFfset:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:IQIMbalance:MAXimum?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:FERRor:SDEViation?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:TERRor:MAXimum?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:BPOWer:AVERage?
FETCh:GSM:MEAS:MEValuation:LIST:MODulation:APDelay:AVERage?
// *************************************************************************
// Return all BER results
// *************************************************************************
FETCh:GSM:MEAS:MEValuation:LIST:BER:BER?
FETCh:GSM:MEAS:MEValuation:LIST:BER:ABSolute?
FETCh:GSM:MEAS:MEValuation:LIST:BER:COUNt?
// *************************************************************************
// Return selected spectrum due to modulation/switching results
// *************************************************************************
FETCh:GSM:MEAS:MEValuation:LIST:SMODulation:CPOWer?
FETCh:GSM:MEAS:MEValuation:LIST:SSWitching:CPOWer?
FETCh:GSM:MEAS:MEValuation:LIST:SMODulation:POFFset15?
FETCh:GSM:MEAS:MEValuation:LIST:SSWitching:POFFset16?
// *************************************************************************
// Return the individual segment reliability indicators
// *************************************************************************
FETCh:GSM:MEAS:MEValuation:LIST:SRELiability?
Top