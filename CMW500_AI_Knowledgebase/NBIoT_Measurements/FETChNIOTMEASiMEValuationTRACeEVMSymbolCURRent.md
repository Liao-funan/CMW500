# FETChNIOTMEASiMEValuationTRACeEVMSymbolCURRent

Module: NBIoT Measurements
Source: 12d3665583ad4472.htm

## 原始指令文档说明
NB-IoT Measurements
 > 
NB-IoT Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:TRACe:EVMSymbol:MAXimum? 
Returns the values of the EVM vs modulation symbol trace. See also 
"View Error Vector Magnitude"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Ratio>
Comma-separated list of EVM values, one value per modulation symbol. The number of results depends on the number of allocated subcarriers.
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements"
Usage: 
Query only
Firmware/Software: 
V3.5.10
Top