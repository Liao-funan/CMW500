# FETChLTEMEASiMEValuationEVMagnitudeCURRent

Module: LTE Measurements
Source: 7d989c8d85234f71.htm

## 原始指令文档说明
LTE UE Measurements
 > 
LTE Multi-Evaluation Measurement
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:LTE:MEAS<i>:MEValuation:EVMagnitude:CURRent?
FETCh:LTE:MEAS<i>:MEValuation:EVMagnitude:CURRent? 
FETCh:LTE:MEAS<i>:MEValuation:EVMagnitude:AVERage? 
FETCh:LTE:MEAS<i>:MEValuation:EVMagnitude:MAXimum? 
READ:LTE:MEAS<i>:MEValuation:EVMagnitude:CURRent? 
READ:LTE:MEAS<i>:MEValuation:EVMagnitude:AVERage? 
READ:LTE:MEAS<i>:MEValuation:EVMagnitude:MAXimum? 
Returns the values of the EVM RMS bar graphs for the SC-FDMA symbols in the measured slot. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"View Error Vector Magnitude"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVMlow0> <EVMhigh0> ... <EVMlow5/6> <EVMhigh5/6>
EVM values, low and high EVM window position.
Normal cyclic prefix: values for SC-FDMA symbol 0 to 6, including the reference symbol as symbol number 3.
Extended cyclic prefix: values for SC-FDMA symbol 0 to 5, including the reference symbol as symbol number 2.
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
V1.0.10.1
Top