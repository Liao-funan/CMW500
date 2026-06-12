# FETChGSMMEASiMEValuationTRACeEVMagnitudeCURRent

Module: GSM Measurements
Source: 6207808d5c30440b.htm

## 原始指令文档说明
GSM Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:CURRent?
FETCh:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:CURRent? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:AVERage? 
FETCh:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:MAXimum? 
READ:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:CURRent? 
READ:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:AVERage? 
READ:GSM:MEAS<i>:MEValuation:TRACe:EVMagnitude:MAXimum? 
Returns the values of the EVM traces. The results of the current, average and maximum traces can be retrieved.
Return values: 
<Reliability>
"Reliability Indicator"
<Result_1> ... <Result_n>
n EVM results, depending on the burst and modulation type
8PSK/16-QAM modulation: 142 values (one value per symbol period, symbol 3 to symbol 144)
GMSK modulation: 588 values (four values per symbol period, symbol 0.5 to symbol 147.5)
Access burst: 348 values (four values per symbol period, symbol 0.5 to symbol 87.5)
Range: 
0 %  to  100 %
Default unit: 
%
Usage: 
Query only
Firmware/Software: 
V1.0.0.4
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top