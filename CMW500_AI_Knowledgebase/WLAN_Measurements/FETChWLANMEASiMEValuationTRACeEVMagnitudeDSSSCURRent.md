# FETChWLANMEASiMEValuationTRACeEVMagnitudeDSSSCURRent

Module: WLAN Measurements
Source: b24e08d6ae4042dd.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
EVM Versus Chip Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:EVMagnitude:DSSS:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the EVM vs chip traces. The results of the current, average and maximum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<EVM>
Comma-separated list of EVM values, each value related to one chip. The maximum number of values is 1000.
Range: 
0 %  to  100 %
Default unit: 
%
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V1.0.10.50, V3.2.11 subarrays
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top