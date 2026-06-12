# CDE vs. Slot Results (Traces)

Module: WCDMA Measurements
Source: 574bc0c4179941e2.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CDE vs. Slot Results (Traces)
CDE vs. Slot Results (Traces)
The following commands return the code domain error (CDE) vs. slot trace results of the multi-evaluation measurement.
List of Commands
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPCCh:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:DPDCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:HSDPcch:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPCch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDERror:EDPDch<no>:SDEViation?
Top