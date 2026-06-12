# FETChLTEMEASiENBMEValuationEVMagnitudeCURRent

Module: LTE eNodeB Measurements
Source: 298a242ddffb46c4.htm

## 原始指令文档说明
LTE eNodeB Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Results (Traces)
 > 
FETCh:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:CURRent?
FETCh:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:CURRent? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:AVERage? 
FETCh:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:MAXimum? 
READ:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:CURRent? 
READ:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:AVERage? 
READ:LTE:MEAS<i>:ENB:MEValuation:EVMagnitude:MAXimum? 
Returns the values of the EVM bar graphs for the OFDM symbols in the measured subframe. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"Views EVM, Magnitude Error, Phase Error"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVMlow0> <EVMhigh0> ... <EVMlow13> <EVMhigh13>
28 EVM values, at low and high EVM window position, OFDM symbol 0 to 13
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
V3.0.20
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top