# FETChWLANMEASiMEValuationTRACePVTimeCURRent

Module: WLAN Measurements
Source: 299b5349a5604767.htm

## 原始指令文档说明
WLAN Measurements
 > 
Command Reference
 > 
Multi-Evaluation Measurement Commands
 > 
Power vs. Time Burst Traces
 > 
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:CURRent?
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
[<start>, <count>[, <decimation>]]
FETCh:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:CURRent? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:AVERage? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:MINimum? 
[<start>, <count>[, <decimation>]]
READ:WLAN:MEAS<i>:MEValuation:TRACe:PVTime:MAXimum? 
[<start>, <count>[, <decimation>]]
Return the values of the power vs. time traces. The results of the current, average, maximum and minimum traces can be retrieved.
For the optional query parameters <start>, <count> and <decimation>, see 
"Trace Sub-Arrays"
.
Return values: 
<Reliability>
"Reliability Indicator"
<Power>
Comma-separated list of max 1024 time values (1024 values without subarrays)
Range: 
-100 dBm  to  30 dBm
Default unit: 
dBm
Example: 
See 
"Performing Single-Shot Measurements (DSSS)"
Usage: 
Query only
Firmware/Software: 
V2.1.10, V3.2.11 subarrays
For additional information concerning syntax elements and returned values, refer to 
"Conventions and General Information"
.
Top