# Retrieving Single Results for All Segments

Module: WCDMA Measurements
Source: 6403e6e01037428c.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Programming
 > 
Using WCDMA List Mode
 > 
Retrieving Single Results for All Segments
Retrieving Single Results for All Segments
// *****************************************************************************
// Return selected peak code domain error results. 
// *****************************************************************************
FETCh:WCDMa:MEAS:MEValuation:LIST:PCDE:ERRor:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:PCDE:PHASe:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:PCDE:CODE:MAXimum?
// *****************************************************************************
// Return selected code domain power and code domain error results.
// *****************************************************************************
FETCh:WCDMa:MEAS:MEValuation:LIST:CDPower:DPCCh:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:CDERror:DPDCh:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:CDPower:HSDPcch:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:CDERror:EDPCch:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:CDPower:EDPDch2:MAXimum?
// *****************************************************************************
// Return selected spectrum emission and ACLR results.
// *****************************************************************************
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:CPOWer:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:UEPower:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:ACLR:M1:AVERage? REL
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:ACLR:P2:AVERage? REL
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:OBW:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:EMASk:EF:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:EMASk:FE:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:SPECtrum:EMASk:HAD:MAXimum?
// *****************************************************************************
// Return selected modulation results.
// *****************************************************************************
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:EVM:RMS:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:EVM:PEAK:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:MERRor:RMS:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:PERRor:RMS:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:PERRor:PEAK:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:IQOFfset:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:IQIMbalance:AVERage?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:FERRor:MAXimum?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:TTERror:CURRent?
FETCh:WCDMa:MEAS:MEValuation:LIST:MODulation:UEPower:AVERage?
// *****************************************************************************
// Return the individual segment reliability indicators
// *****************************************************************************
FETCh:WCDMa:MEAS:MEValuation:LIST:SRELiability?
Top