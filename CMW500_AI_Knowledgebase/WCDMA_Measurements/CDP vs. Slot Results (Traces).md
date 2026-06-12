# CDP vs. Slot Results (Traces)

Module: WCDMA Measurements
Source: 284522fad9184cd0.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
CDP vs. Slot Results (Traces)
CDP vs. Slot Results (Traces)
The following commands return the code domain power (CDP) vs. slot trace results of the multi-evaluation measurement.
List of Commands
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MINimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPCCh:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MINimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:DPDCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:MINimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:HSDPcch:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:MINimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPCch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:SDEViation?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:CURRent?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:AVERage?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:MINimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:MAXimum?
READ:WCDMa:MEAS<i>:MEValuation:CARRier<c>:TRACe:CDPower:EDPDch<no>:SDEViation?
Top