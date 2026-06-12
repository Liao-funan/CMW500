# FETChNIOTMEASiMEValuationEVMagnitudeCURRent

Module: NBIoT Measurements
Source: ef4b72510fc84112.htm

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
FETCh:NIOT:MEAS<i>:MEValuation:EVMagnitude:CURRent?
FETCh:NIOT:MEAS<i>:MEValuation:EVMagnitude:CURRent? 
FETCh:NIOT:MEAS<i>:MEValuation:EVMagnitude:AVERage? 
FETCh:NIOT:MEAS<i>:MEValuation:EVMagnitude:MAXimum? 
READ:NIOT:MEAS<i>:MEValuation:EVMagnitude:CURRent? 
READ:NIOT:MEAS<i>:MEValuation:EVMagnitude:AVERage? 
READ:NIOT:MEAS<i>:MEValuation:EVMagnitude:MAXimum? 
Returns the values of the EVM RMS bar graphs for the SC-FDMA symbols in the measured slot. The results of the current, average and maximum bar graphs can be retrieved.
See also 
"View Error Vector Magnitude"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Results>
Comma-separated list of 7 results, for SC-FDMA symbol 0 to 6
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