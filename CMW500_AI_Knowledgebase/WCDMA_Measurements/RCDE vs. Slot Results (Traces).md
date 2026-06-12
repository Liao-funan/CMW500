# RCDE vs. Slot Results (Traces)

Module: WCDMA Measurements
Source: a7b31169d6a04947.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
RCDE vs. Slot Results (Traces)
RCDE vs. Slot Results (Traces)
The following commands return the relative code domain error (RCDE) vs. slot trace results of the multi-evaluation measurement.
List of Commands
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPCCh:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:DPDCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:HSDPcch:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPCch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:EDPDch<no>:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:DPCCh?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:DPDCh?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:DPCCh?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:DPDCh?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPCch?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:HSDPcch?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPCch?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:HSDPcch?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPDch<no>?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:RCDerror:SF:EDPDch<no>?
Top