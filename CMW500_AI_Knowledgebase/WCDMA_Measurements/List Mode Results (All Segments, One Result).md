# List Mode Results (All Segments, One Result)

Module: WCDMA Measurements
Source: 9629155f4b5b445d.htm

## 原始指令文档说明
WCDMA UE Measurements
 > 
WCDMA Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
List Mode Results (All Segments, One Result)
List Mode Results (All Segments, One Result)
Each of the following commands returns a selected list mode result for all measured segments. The number of returned results depends on the number of measured segments, see 
CONFigure:
​
WCDMa:
​
MEAS<i>:
​
MEValuation:
​
LIST:
​
COUNt
.
To configure the list mode, use the commands described in 
"List Mode Settings"
.
For a description of the list mode, see 
"Multi-Evaluation List Mode"
.
Indicated ranges apply to all statistical results except standard deviation results. The minimum for standard deviation results equals 0. The maximum equals the width of the indicated range divided by two. Exceptions are explicitly stated.
List of Commands
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SRELiability?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:ERRor:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:ERRor:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:PHASe:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:PHASe:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:CODE:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:PCDE:CODE:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPCCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPCCh:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPCCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPCCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPCCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPCCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPCCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPCCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPDCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPDCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPDCh:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPDCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:DPDCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPDCh:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPDCh:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPDCh:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:DPDCh:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:HSDPcch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:HSDPcch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:HSDPcch:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:HSDPcch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:HSDPcch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:HSDPcch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:HSDPcch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:HSDPcch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:HSDPcch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPCch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPCch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPCch:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPCch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPCch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPCch:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPCch:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPCch:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPCch:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:MINimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDPower:EDPDch<no>:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:CDERror:EDPDch<no>:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:CPOWer:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:CPOWer:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:CPOWer:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:UEPower:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:UEPower:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:UEPower:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:M<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:P<no>:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:P<no>:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:ACLR:P<no>:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:OBW:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:OBW:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:OBW:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:AB:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BC:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BC:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BC:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CD:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CD:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CD:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:EF:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:EF:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:EF:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:FE:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:DC:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:DC:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:DC:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CB:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CB:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:CB:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BA:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BA:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:BA:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HAD:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HDA:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HDA:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:SPECtrum:EMASk:HDA:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:RMS:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:EVM:PEAK:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:RMS:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:MERRor:PEAK:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:RMS:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:PERRor:PEAK:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQOFfset:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:IQIMbalance:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:FERRor:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:FERRor:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:FERRor:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:FERRor:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:TTERror:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:TTERror:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:TTERror:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:TTERror:SDEViation?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:UEPower:CURRent?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:UEPower:AVERage?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:UEPower:MAXimum?
FETCh:WCDMa:MEAS<i>:MEValuation:LIST:MODulation:UEPower:SDEViation?
Top